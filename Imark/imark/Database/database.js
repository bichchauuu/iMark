const { MongoClient } = require("mongodb");

// Chuỗi kết nối MongoDB (cục bộ hoặc từ MongoDB Atlas)
const uri = "mongodb://localhost:27017"; // Dùng localhost nếu bạn đang chạy MongoDB trên máy tính
// Hoặc sử dụng MongoDB Atlas:
// const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/imark?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function connectDB() {
    try {
        // Kết nối tới MongoDB
        await client.connect();
        console.log("Kết nối MongoDB thành công!");
        return client.db("imark"); // Truy cập cơ sở dữ liệu có tên "imark"
    } catch (err) {
        console.error("Lỗi kết nối MongoDB:", err);
    }
}

module.exports = connectDB;
