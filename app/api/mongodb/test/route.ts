import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    
    // Test connection by listing databases
    const adminDb = client.db().admin();
    const dbs = await adminDb.listDatabases();
    
    return NextResponse.json({
      success: true,
      message: 'MongoDB connection successful',
      databases: dbs.databases.map((db) => db.name),
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to connect to MongoDB',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

