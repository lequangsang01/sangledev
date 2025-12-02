import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

interface VisitorData {
  ip?: string;
  userAgent?: string;
  referer?: string;
  language?: string;
  timezone?: string;
  timestamp: Date;
  path?: string;
}

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('sangledev');
    const collection = db.collection('visitors');

    // Get visitor information
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referer = request.headers.get('referer') || 'direct';
    const language = request.headers.get('accept-language') || 'unknown';
    
    // Get body data if sent from client
    const body = await request.json().catch(() => ({}));
    const timezone = body.timezone || 'unknown';
    const path = body.path || '/';

    const visitorData: VisitorData = {
      ip: ip.split(',')[0].trim(), // Get first IP if multiple
      userAgent,
      referer,
      language: language.split(',')[0], // Get primary language
      timezone,
      timestamp: new Date(),
      path,
    };

    // Insert visitor data
    const result = await collection.insertOne(visitorData);

    return NextResponse.json({
      success: true,
      message: 'Visitor data saved',
      id: result.insertedId,
    });
  } catch (error) {
    console.error('Error saving visitor data:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to save visitor data',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve visitor stats (optional)
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('sangledev');
    const collection = db.collection('visitors');

    const totalVisitors = await collection.countDocuments();
    const uniqueIPs = await collection.distinct('ip');
    
    // Get recent visitors (last 24 hours)
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    const recentVisitors = await collection.countDocuments({
      timestamp: { $gte: oneDayAgo },
    });

    return NextResponse.json({
      success: true,
      stats: {
        totalVisitors,
        uniqueIPs: uniqueIPs.length,
        recentVisitors,
      },
    });
  } catch (error) {
    console.error('Error retrieving visitor stats:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve visitor stats',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

