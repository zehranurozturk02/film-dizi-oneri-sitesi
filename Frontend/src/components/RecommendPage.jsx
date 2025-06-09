import React, { useEffect, useState } from "react";

const RecommendPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("Token bulunamadı.");
          return;
        }

        // Token ile kullanıcı bilgisi al
        const userRes = await fetch(`${process.env.REACT_APP_API_URL}/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = await userRes.json();

        if (!user || !user._id) {
          console.warn("Kullanıcı bulunamadı.");
          return;
        }

        // Kullanıcı ID'si ile önerileri al
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/recommendations?userId=${user._id}`
        );
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error("Öneriler alınırken hata:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Yükleniyor...</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>🎬 Önerilen Filmler</h2>
      {movies.length === 0 ? (
        <p>Şu anda önerilecek film bulunamadı.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "1rem",
                width: "180px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={movie.photo}
                alt={movie.name}
                style={{ width: "100%", height: "270px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h4 style={{ marginTop: "0.5rem" }}>{movie.name}</h4>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>IMDb: {movie.imdb}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendPage;
