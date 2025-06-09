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
- - 🔗 Node.js tabanlı backend API desteği

---

## ⚙️ Kullanılan Teknolojiler

### 🖥️ Frontend
- **React** (Vite ile yapılandırılmış)
- **Tailwind CSS** (stil yönetimi)
- **Axios** (API istekleri)
- **React Router** (sayfa geçişleri)

### 🌐 Backend
- **Node.js & Express**
- **MongoDB** (muhtemelen veri saklama için)
- **dotenv** (çevresel değişkenler için)
- **Custom API Routes** 

### 🧠 Öneri Sistemi
- **İçerik Tabanlı Filtreleme (Content-Based Filtering)**
- Öneri algoritmaları

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

## 📁 Proje Klasör Yapısı

```plaintext
film-dizi-oneri-sistemi/
│
├── backend/                   → Node.js tabanlı API
│   ├── models/                → Mongoose modelleri (varsa)
    ├── node.modules          
│   ├── routes/               → API endpoint'leri
│   ├── import_movies.js      → Film verisi içe aktarma
│   ├── insert.js / delete.js → DB işlemleri
│   ├── index.js              → Ana backend uygulaması
│   └── .env                  → Ortam değişkenleri
│
├── Frontend/                 → React arayüzü
│   ├── public/              → Statik dosyalar
│   ├── src/                 → React bileşenleri ve öneri sistemi
│   │   ├── components/      → UI bileşenleri
│   │   ├── pages/           → Sayfa bileşenleri
│   │   └── utils/           → Öneri fonksiyonları
│   └── package.json         → Frontend bağımlılıkları
│
├── README.md                 → Bu dökümantasyon dosyası
├── .env                      → Ortak ortam değişkenleri
├── .gitignore
└── package.json              → Proje bağımlılıkları (root)


