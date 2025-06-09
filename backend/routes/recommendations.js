const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = mongoose.connection;

router.get('/', async (req, res) => {
  const userId = req.query.userId;

  try {
    const user = await db.collection("users").findOne({ _id: new mongoose.Types.ObjectId(userId) });

    if (!user) {
      return res.json([]);
    }

    let referenceMovies = [];

    // 1. Eğer ratings varsa ve puanı yüksekse onları kullan
    if (user.ratings && user.ratings.length > 0) {
      const highRatedIds = user.ratings
        .filter(r => r.score >= 6)
        .map(r => new mongoose.Types.ObjectId(r.movieId));

      const highRatedMovies = await db.collection("movies").find({
        _id: { $in: highRatedIds }
      }).toArray();

      referenceMovies = highRatedMovies.map(m => m.name);
    }

    // 2. Eğer yüksek puanlı film yoksa => favorites'dan kullan
    if (referenceMovies.length === 0 && user.favorites && user.favorites.length > 0) {
      referenceMovies = user.favorites.map(f => f.name);
    }

    if (referenceMovies.length === 0) {
      return res.json([]); // Hiç referans film yoksa öneri yapılmaz
    }

    // 3. Referans filmlerin tür skorlarını topla
    const movieDocs = await db.collection("movies").find({
      name: { $in: referenceMovies }
    }).toArray();

    const genres = ["romance", "action", "adventure", "horror", "thriller", "sciFi"];
    const genreScores = {};
    genres.forEach(g => genreScores[g] = 0);

    movieDocs.forEach(movie => {
      genres.forEach(genre => {
        genreScores[genre] += movie[genre] || 0;
      });
    });

    // 4. En yüksek 2 türü seç
    const topGenres = Object.entries(genreScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([genre]) => genre);

    // 5. Bu türlere göre öneri yap
    const recommended = await db.collection("movies").find({
      name: { $nin: referenceMovies },
      $or: topGenres.map(genre => ({ [genre]: { $gte: 6 } }))
    }).limit(10).toArray();

    res.json(recommended);
  } catch (error) {
    console.error("Hata:", error);
    res.status(500).json({ error: "Sunucu hatası" });
  }
});

module.exports = router;
