require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Route dosyaları
const authRoutes = require("./routes/auth");
const filmRoutes = require("./routes/filmRoutes");
const userRoutes = require("./routes/userRoutes"); // 🟢 BU ÖNEMLİ

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB bağlantısı başarılı"))
  .catch(err => console.error("❌ MongoDB bağlantı hatası:", err));

// Route kullanımı
app.use("/api", authRoutes);
app.use("/api/films", filmRoutes);
app.use("/api", userRoutes); // 🟢 BU DA ÖNEMLİ
app.use('/api/recommendations', require('./routes/recommendations'));


// Test endpoint
app.get("/", (req, res) => {
  res.send("✅ Backend çalışıyor!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`));
