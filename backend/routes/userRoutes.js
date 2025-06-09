const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/test-preference-route", (req, res) => {
  res.send("✅ Preference route aktif!");
});

// 🎯 Favori filmleri kaydet
router.post("/users/:id/favorites", async (req, res) => {
  try {
    const userId = req.params.id;
    const favorites = req.body.favorites;

    if (!Array.isArray(favorites) || favorites.length !== 3) {
      return res.status(400).json({ error: "Tam olarak 3 film gönderilmelidir." });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { favorites },
      { new: true }
    );

    res.json({ success: true, favorites: updatedUser.favorites });
  } catch (err) {
    console.error("Favori film kaydetme hatası:", err);
    res.status(500).json({ error: "Favoriler kaydedilemedi." });
  }
});

// 🎯 Tercih profilini kaydet
router.post("/users/:id/preferences", async (req, res) => {
  try {
    const userId = req.params.id;
    const preference = req.body.preference;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { preference },
      { new: true }
    );

    res.json({ success: true, preference: updatedUser.preference });
  } catch (err) {
    console.error("Tercih kaydetme hatası:", err);
    res.status(500).json({ error: "Tercihler kaydedilemedi." });
  }
});

module.exports = router;
