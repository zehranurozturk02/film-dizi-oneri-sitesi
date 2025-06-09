const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preference: {
    romance: { type: Number, default: 0 },
    action: { type: Number, default: 0 },
    adventure: { type: Number, default: 0 },
    horror: { type: Number, default: 0 },
    thriller: { type: Number, default: 0 },
    sciFi: { type: Number, default: 0 },
    imdb: { type: Number, default: 0 }
  },
  ratings: [
    {
      movieId: { type: String, required: true },
      score: { type: Number, required: true }
    }
  ],
  favorites: [
    {
      _id: String,
      name: String,
      photo: String,
      imdb: Number,
      romance: Number,
      action: Number,
      adventure: Number,
      horror: Number,
      thriller: Number,
      sciFi: Number
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
