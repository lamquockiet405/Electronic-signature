const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Cấu hình nơi lưu file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // thư mục lưu file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // đặt tên file duy nhất
  },
});
const upload = multer({ storage });

// API upload
app.post("/upload", upload.single("document"), (req, res) => {
  res.json({ message: "Upload thành công!", file: req.file });
});

// Chạy server
app.listen(4000, () => {
  console.log("✅ Express server chạy tại http://localhost:4000");
});
