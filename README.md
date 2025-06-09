# 🎬 Film-Dizi Öneri Sistemi

Bu proje, kullanıcıların seçtiği veya puanladığı filmler üzerinden onlara yapay zeka destekli film ve dizi önerileri sunan bir web uygulamasıdır. Sistem hem kullanıcıların ilk tercihlerine, hem de sonradan verdikleri puanlara göre **dinamik olarak** öneri sunar.

---

## 📌 Projenin Amacı

Kullanıcılar, izledikleri filmlere verdikleri puanlarla ya da başlangıçta seçtikleri filmlerle, kendi ilgi alanlarına uygun film/dizi önerileri alırlar. Sistem, bu tercihleri analiz ederek film türleri bazında önerilerde bulunur.

---

## 🚀 Özellikler

- 🎯 Kullanıcının ilk seçtiği 3 filme göre öneriler sunar
- ⭐ Kullanıcı filmlere puan verdikçe öneri sistemi güncellenir
- 📂 Filmler türlerine göre kategorize edilmiştir (aksiyon, aşk, komedi, vb.)
- 💡 İçerik tabanlı filtreleme yöntemi kullanılmıştır
- 🧠 Basit yapay zeka mantığına dayalı öneri motoru içerir
- 🌐 React tabanlı kullanıcı dostu arayüz

---

## ⚙️ Kullanılan Teknolojiler

### Frontend:
- **React** (Vite ile hızlı yapılandırma)
- **Tailwind CSS** (stil yönetimi için)
- **Axios** (API istekleri için)
- **React Router** (sayfa yönlendirmeleri için)

### Backend:
- **JSON veri yapısı** ile statik veriler veya sahte API

### Öneri Sistemi:
- **İçerik Tabanlı Filtreleme (Content-Based Filtering)** algoritması
- **JavaScript** ile yazılmış öneri fonksiyonları

---

## 🧠 Öneri Sistemi Detayları

Bu projede öneri sistemi, **içerik tabanlı filtreleme (Content-Based Filtering)** mantığıyla çalışır.

### 🔍 Nasıl Çalışır?

1. Kullanıcı ilk girişte 3 film seçer
2. Bu 3 filmin türleri analiz edilir → kullanıcı profili çıkarılır
3. Tür benzerliği taşıyan diğer filmler önerilir
4. Kullanıcı daha sonra başka filmlere puan verdikçe sistem tekrar eğitilir
5. Yeni öneriler, güncel puanlara göre otomatik olarak yeniden hesaplanır

### 📊 Kullanıcı profili nasıl oluşur?

Kullanıcının beğendiği filmlerden, hangi türleri daha çok sevdiği anlaşılır. Örneğin:
- Kullanıcı 3 aksiyon filmi seçmişse → öneriler aksiyon odaklı olur
- Daha sonra romantik filmlere 5 yıldız verirse → romantik tür ağırlığı artar

---

## ⚙️ Teknolojiler

| Katman           | Teknoloji            |
|------------------|----------------------|
| Frontend         | React.js             |
| Backend          | Flask                |
| Yapay Zeka       | İçerik tabanlı filtreleme (Content-based) |
| Veri formatı     | JSON                 |
| Styling          | CSS / Tailwind / Bootstrap (isteğe bağlı) |

---

## 📁 Proje Dosya Yapısı

```plaintext
film-dizi-oneri-sitesi/
│
├── backend/                  → FastAPI backend
│   ├── main.py               → API'nin giriş noktası
│   ├── recommendation.py     → Öneri algoritmasını içeren dosya
│   ├── utils.py              → Yardımcı fonksiyonlar
│   ├── data/                 → CSV veri dosyaları (filmler, puanlar, vs.)
│   └── requirements.txt      → Python bağımlılıklarını listeler
│
├── frontend/                 → React tabanlı kullanıcı arayüzü
│   ├── src/
│   │   ├── components/       → Bileşenler (film kartları, navbar, vs.)
│   │   ├── pages/            → Sayfa yapıları (Ana sayfa, öneriler vs.)
│   │   ├── App.jsx           → Uygulama kök bileşeni
│   │   └── main.jsx          → React DOM başlangıç dosyası
│   └── package.json          → Frontend bağımlılık ve script tanımları
│
└── README.md                 → Proje açıklaması ve kullanım bilgileri (bu dosya)


