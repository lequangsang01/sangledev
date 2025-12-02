# MongoDB Setup Guide

## Connection String Format

Đảm bảo connection string của bạn có đầy đủ các parameters sau:

```
mongodb+srv://username:password@cluster0.ejpfxlt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

## Các bước cần kiểm tra trên MongoDB Atlas:

1. **Network Access**: 
   - Vào MongoDB Atlas Dashboard
   - Chọn "Network Access" 
   - Thêm IP `0.0.0.0/0` để cho phép tất cả IP (hoặc chỉ IP của Vercel)
   - Hoặc thêm IP cụ thể của Vercel deployment

2. **Database User**:
   - Đảm bảo user có quyền read/write
   - Password phải đúng và không có ký tự đặc biệt cần encode

3. **Connection String**:
   - Sử dụng format: `mongodb+srv://...`
   - Đảm bảo có `retryWrites=true&w=majority`

## Environment Variables trên Vercel:

1. Vào Vercel Dashboard
2. Chọn project của bạn
3. Vào Settings > Environment Variables
4. Thêm `MONGODB_URI` với connection string đầy đủ

## Troubleshooting SSL Errors:

Nếu vẫn gặp lỗi SSL:
- Kiểm tra Network Access trên MongoDB Atlas
- Đảm bảo connection string đúng format
- Kiểm tra user/password có đúng không
- Thử tạo database user mới nếu cần

## Troubleshooting "MALFORMED_ARGUMENT" Error:

Lỗi `INVALID_MESSAGE: MALFORMED_ARGUMENT` thường do:

1. **Connection String Format**:
   - Đảm bảo connection string bắt đầu với `mongodb+srv://` hoặc `mongodb://`
   - Password không có ký tự đặc biệt hoặc đã được URL encode
   - Không có khoảng trắng thừa

2. **Password với ký tự đặc biệt**:
   - Nếu password có `@`, `:`, `/`, `#`, `?`, `&`, `=` thì cần URL encode
   - Ví dụ: `password@123` → `password%40123`
   - Sử dụng `encodeURIComponent()` để encode password

3. **Connection String trên Vercel**:
   - Vào Vercel Dashboard → Settings → Environment Variables
   - Kiểm tra `MONGODB_URI` không có khoảng trắng thừa
   - Format đúng: `mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority`

4. **Test Connection String**:
   - Copy connection string từ MongoDB Atlas Dashboard
   - Đảm bảo copy đầy đủ, không thiếu ký tự
   - Thử tạo connection string mới từ MongoDB Atlas nếu cần

