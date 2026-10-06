/* ==========================================================================
   CIREBON KULINER — JELAJAHI RASA CIREBON
   JavaScript Logic & State Management
   ========================================================================== */

// 1. DATA MAKANAN KHAS CIREBON (10 DATA DENGAN KOORDINAT LOKASI REAL DI KOTA CIREBON)
const foods = [
  {
    id: 1,
    name: "Empal Gentong H. Apud",
    cat: "Makanan Berat",
    area: "Kedawung",
    rating: 4.8,
    price: "Rp25.000–45.000",
    img: "https://img-global.cpcdn.com/recipes/0e170480b8720d90/680x482cq70/empal-gentong-khas-cirebon-foto-resep-utama.jpg",
    desc: "Empal gentong kuah santan gurih dengan daging sapi empuk, jeroan, dan irisan kucai yang dimasak secara tradisional menggunakan gentong tanah liat dan kayu bakar khas Cirebon.",
    hours: "08.00–21.00 WIB",
    coords: [-6.7152, 108.5378] // Jl. Ir. H. Juanda, Kedawung
  },
  {
    id: 2,
    name: "Nasi Jamblang Ibu Nur",
    cat: "Makanan Berat",
    area: "Kejaksan",
    rating: 4.7,
    price: "Rp15.000–35.000",
    img: "https://asset-2.tstatic.net/priangan/foto/bank/images/Nasi-Jamblang-Khas-Cirebon.jpg",
    desc: "Nasi bungkus daun jati nan harum disajikan dengan puluhan pilihan lauk khas seperti cumi masak hitam, paru goreng renyah, semur tahu, tempe mendoan, dan sambal cabai merah iris.",
    hours: "07.00–21.00 WIB",
    coords: [-6.7196, 108.5562] // Jl. Cangkring 2 No. 34, Kejaksan
  },
  {
    id: 3,
    name: "Tahu Gejrot Kanoman",
    cat: "Jajanan",
    area: "Kanoman",
    rating: 4.6,
    price: "Rp8.000–15.000",
    img: "https://cdn.idntimes.com/content-images/community/2019/06/img-1561686395929-cf37cc7c628ac77b69b7fd6b06a4aa37_600x400.jpg",
    desc: "Tahu pong goreng yang dipotong-potong di atas piring tanah liat kecil, disiram kuah asam manis pedas dari ulekan bawang merah, cabai rawit segar, dan air gula aren wangi.",
    hours: "09.00–18.00 WIB",
    coords: [-6.7218, 108.5678] // Pasar Kanoman, Lemahwungkuk / Kanoman
  },
  {
    id: 4,
    name: "Nasi Lengko Bahagia",
    cat: "Makanan Berat",
    area: "Kesambi",
    rating: 4.5,
    price: "Rp12.000–25.000",
    img: "https://www.eresep.com/media/images/resep/2020/11/18/0J3SpnAdD1kNMXNBA41l7Ubb7NislynRn4mOJpQj.jpeg.1000x650_q85.jpg",
    desc: "Sajian kuliner sehat berisi nasi putih, potongan tahu-tempe goreng dadu, mentimun cincang segar, tauge rebus, disiram saus kacang gurih halus, kecap manis khas Cirebon, dan bawang goreng.",
    hours: "06.00–15.00 WIB",
    coords: [-6.7171, 108.5654] // Jl. Bahagia, Kota Cirebon
  },
  {
    id: 5,
    name: "Mie Koclok Pak Rasita",
    cat: "Makanan Berat",
    area: "Kejaksan",
    rating: 4.6,
    price: "Rp18.000–30.000",
    img: "https://asset.kompas.com/crops/xgh5QHLntIyQpHyZO_JtbeSO1bQ=/0x500:750x1000/1200x800/data/photo/2022/07/22/62d9e6503726a.jpeg",
    desc: "Mie kuning basah yang disiram kuah putih kental gurih dari tepung beras dan santan beraroma kaldu sapi, disajikan lengkap dengan suwiran ayam, potongan telur rebus, tauge, dan daun bawang.",
    hours: "15.00–22.00 WIB",
    coords: [-6.7205, 108.5612] // Kejaksan, Kota Cirebon
  },
  {
    id: 6,
    name: "Docang Pak Kumis",
    cat: "Makanan Berat",
    area: "Harjamukti",
    rating: 4.4,
    price: "Rp10.000–20.000",
    img: "https://bengkuluekspress.disway.id/upload/dd5fb6afd21af4347f3d98510d11b80f.jpg",
    desc: "Hidangan sarapan legendaris Cirebon berupa campuran lontong, rebusan daun singkong, tauge, kerupuk putih, disiram kuah hangat rempah parutan kelapa dan dage (oncom khas).",
    hours: "06.00–11.00 WIB",
    coords: [-6.7262, 108.5543] // Tentara Pelajar, Harjamukti
  },
  {
    id: 7,
    name: "Seafood Losari",
    cat: "Seafood",
    area: "Sunyaragi",
    rating: 4.7,
    price: "Rp35.000–90.000",
    img: "https://www.allrecipes.com/thmb/XDFvpo7BXQ7_s920fAp28qox0PY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/279460-Old-Bay-Seafood-Boil-ddmfs-139-4x3-aa189a5c09104659957fe6fcb715c4bd.jpg",
    desc: "Aneka olahan hasil laut segar pesisir Cirebon seperti kepiting saus Padang, udang bakar kecap pedas, dan cumi goreng tepung gurih renyah untuk dinikmati bersama keluarga.",
    hours: "11.00–22.00 WIB",
    coords: [-6.7374, 108.5451] // Sunyaragi, Kota Cirebon
  },
  {
    id: 8,
    name: "Es Cuwing Cirebon",
    cat: "Minuman",
    area: "Kanoman",
    rating: 4.5,
    price: "Rp8.000–15.000",
    img: "https://image.idntimes.com/post/20200715/in2-frenklin-20200715-0001-78dd42340a02d46be592abf901bbc380.jpg",
    desc: "Es pencuci mulut tradisional berbahan cuwing (cincau hijau alami) lembut, disajikan dengan es serut, kuah santan gurih, sirup gula aren wangi, dan pelengkap ketan hitam.",
    hours: "09.00–17.00 WIB",
    coords: [-6.7225, 108.5684] // Area Pasar Kanoman
  },
  {
    id: 9,
    name: "Kerupuk Melarat",
    cat: "Jajanan",
    area: "Kejaksan",
    rating: 4.3,
    price: "Rp10.000–25.000",
    img: "https://1.bp.blogspot.com/-WobAZqVf18s/VHy_nkKDtNI/AAAAAAAAAUA/Kf3qZA0liGQ/s1600/Kerupuk%2BMelarat.jpg",
    desc: "Camilan kerupuk warna-warni unik yang dimasak tanpa minyak goreng melainkan digoreng menggunakan pasir sungai panas yang telah disaring bersih, disantap dengan cocolan sambal asam pedas.",
    hours: "08.00–20.00 WIB",
    coords: [-6.7078, 108.5559] // Pusat Oleh-oleh Jl. Siliwangi, Kejaksan
  },
  {
    id: 10,
    name: "Tape Ketan Bakung",
    cat: "Jajanan",
    area: "Harjamukti",
    rating: 4.4,
    price: "Rp12.000–30.000",
    img: "https://hiacetransport.com/wp-content/uploads/2023/08/Tape-Bakung-by-BigGo-768x614.webp",
    desc: "Tape ketan hijau dengan citarasa fermentasi manis asam lembut khas Desa Bakung Cirebon, dibungkus rapi menggunakan daun jambu air yang memberikan aroma wangi khas alami.",
    hours: "08.00–19.00 WIB",
    coords: [-6.7450, 108.5320] // Harjamukti, Cirebon
  }
];

// 2. 20 KATEGORI KULINER (PERTANAHKAN STRUKTUR KATEGORI)
const categories = [
  ["Nasi & Rice", "Makanan Berat", "https://images.unsplash.com/photo-1749640566096-5d8098d452b4?auto=format&fit=crop&w=700&q=80", "Sajian nasi wangi dan rempah."],
  ["Mie & Bakso", "Makanan Berat", "https://images.unsplash.com/photo-1747317277795-0d601795682c?auto=format&fit=crop&w=700&q=80", "Mie kuah kental dan olahan bakso."],
  ["Sate & Bakar", "Makanan Berat", "https://images.unsplash.com/photo-1603088549155-6ae9395b928f?auto=format&fit=crop&w=700&q=80", "Hidangan panggangan bumbu meresap."],
  ["Seafood Laut", "Seafood", "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?auto=format&fit=crop&w=700&q=80", "Sajian laut segar pesisir."],
  ["Ayam & Bebek", "Makanan Berat", "https://plus.unsplash.com/premium_photo-1669245207961-0281fd9396eb?auto=format&fit=crop&w=700&q=80", "Olahan ayam & bebek goreng/bakar."],
  ["Jajanan Pasar", "Jajanan", "https://images.unsplash.com/photo-1687489710173-2bbc35d55215?auto=format&fit=crop&w=700&q=80", "Camilan tradisional manis gurih."],
  ["Tahu & Tempe", "Jajanan", "https://images.unsplash.com/photo-1716801564904-5605f562b664?auto=format&fit=crop&w=700&q=80", "Olahan kedelai khas seperti Tahu Gejrot."],
  ["Minuman Tradisional", "Minuman", "https://images.unsplash.com/photo-1592039017841-65201402f522?auto=format&fit=crop&w=700&q=80", "Minuman herbal & rempah hangat."],
  ["Es & Dessert", "Minuman", "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80", "Es segar pencuci mulut khas."],
  ["Kopi & Cafe", "Minuman", "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?auto=format&fit=crop&w=700&q=80", "Seduhan kopi lokal dan tempat santai."],
  ["Gorengan", "Jajanan", "https://images.unsplash.com/photo-1707274861080-8c72f289cb6c?auto=format&fit=crop&w=700&q=80", "Camilan goreng renyah hangat."],
  ["Lontong", "Makanan Berat", "https://images.unsplash.com/photo-1740993385226-05c49e3dbc70?auto=format&fit=crop&w=700&q=80", "Lontong kuah gurih seperti Docang."],
  ["Masakan Sunda", "Makanan Berat", "https://images.unsplash.com/photo-1658218615053-955e8af55947?auto=format&fit=crop&w=700&q=80", "Hidangan segar ala Parahyangan."],
  ["Masakan Jawa", "Makanan Berat", "https://images.unsplash.com/photo-1643357749912-b0b7ebc5c663?auto=format&fit=crop&w=700&q=80", "Cita rasa manis gurih khas Jawa."],
  ["Oleh-oleh", "Jajanan", "https://images.unsplash.com/photo-1642574912598-43b03e2bace0?auto=format&fit=crop&w=700&q=80", "Buah tangan khas Cirebon."],
  ["Kue Tradisional", "Jajanan", "https://images.unsplash.com/photo-1680345576151-bbc497ba969e?auto=format&fit=crop&w=700&q=80", "Kue basah legendaris."],
  ["Pecel & Lalapan", "Makanan Berat", "https://images.unsplash.com/photo-1771914248560-40afaff50f75?auto=format&fit=crop&w=700&q=80", "Sayuran segar dengan sambal."],
  ["Makanan Pedas", "Makanan Berat", "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=700&q=80", "Olahan pedas menggugah selera."],
  ["Kuliner Malam", "Makanan Berat", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80", "Santapan malam legendaris."],
  ["Tempat Nongkrong", "Minuman", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80", "Suasana santai kumpul bersama."]
];

// 3. GLOBAL STATE & UTILITIES
let favorites = JSON.parse(localStorage.getItem("cirebonFav") || "[]");
let map = null;
let homePreviewMap = null;
let markers = [];
let currentDetailId = 1;
let revealObserver = null;
let revealFallbackInitialized = false;
let foodCardTiltInitialized = false;
let uiAudioContext = null;
let fireworkCanvas = null;
let fireworkContext = null;
let fireworkFrame = 0;
let fireworkLaunches = [];
let fireworkParticles = [];
let fireworkFlashUntil = 0;

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

function isFav(id) {
  return favorites.includes(id);
}

function toggleFav(id) {
  if (!id) return;
  if (isFav(id)) {
    favorites = favorites.filter(x => x !== id);
    showToast("Dihapus dari favorit");
  } else {
    favorites.push(id);
    showToast("❤️ Ditambahkan ke favorit!");
  }
  localStorage.setItem("cirebonFav", JSON.stringify(favorites));
  updateFavCount();
  renderCurrent();
}

function updateFavCount() {
  const count = favorites.length;
  if ($("#favCount")) $("#favCount").textContent = count;
  if ($("#mobileFavCount")) $("#mobileFavCount").textContent = count;
  if ($("#favBadge")) $("#favBadge").textContent = `${count} tersimpan`;
}

function showToast(message) {
  const container = $("#toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

function createClickExplosion(x, y, variant = "click") {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particleSets = {
    category: ["✨", "⭐", "💥", "🌟", "🌶️"],
    favorite: ["❤️", "💖", "✨", "💗", "😂"],
    food: ["🍜", "🍛", "💥", "⭐", "🍕"],
    search: ["✨", "💥", "🌟", "⭐"],
    click: ["✨", "⭐", "💥", "🌟", "❤️", "🍜", "🍔", "😂", "🌶️"]
  };
  const symbols = particleSets[variant] || particleSets.click;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mobile = width <= 600;
  const particleCount = reducedMotion ? 12 : mobile ? 20 : 34;
  const extraBursts = reducedMotion ? 2 : mobile ? 5 + Math.floor(Math.random() * 2) : 7 + Math.floor(Math.random() * 4);
  const originX = Math.max(0, Math.min(width, x));
  const originY = Math.max(0, Math.min(height, y));

  if (!fireworkCanvas) {
    fireworkCanvas = document.createElement("canvas");
    fireworkCanvas.className = "firework-canvas";
    fireworkCanvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(fireworkCanvas);
    fireworkContext = fireworkCanvas.getContext("2d");
  }

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  fireworkCanvas.width = Math.round(width * pixelRatio);
  fireworkCanvas.height = Math.round(height * pixelRatio);
  fireworkCanvas.style.width = `${width}px`;
  fireworkCanvas.style.height = `${height}px`;
  fireworkContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  fireworkFlashUntil = performance.now() + (reducedMotion ? 45 : 75);

  const burst = (burstX, burstY) => {
    const colors = ["#ff4057", "#ffd447", "#48a9ff", "#5be28c", "#ff68b8", "#b983ff", "#ff873d", "#4ce8e1", "#ffffff"];
    for (let index = 0; index < particleCount; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 95 + Math.random() * (reducedMotion ? 150 : 300);
      const useEmoji = !reducedMotion && Math.random() < 0.12;
      fireworkParticles.push({
        x: burstX,
        y: burstY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 0.9 + Math.random() * (reducedMotion ? 0.45 : 1.05),
        radius: 1.5 + Math.random() * 2.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        symbol: useEmoji ? symbols[Math.floor(Math.random() * symbols.length)] : ""
      });
    }
  };

  burst(originX, originY);
  for (let index = 0; index < extraBursts; index += 1) {
    const targetX = width * (0.06 + Math.random() * 0.88);
    const targetY = height * (0.08 + Math.random() * 0.78);
    const side = Math.floor(Math.random() * 4);
    const startX = side === 0 ? 0 : side === 1 ? width : targetX;
    const startY = side === 2 ? height : side === 3 ? 0 : height * (0.45 + Math.random() * 0.45);
    fireworkLaunches.push({
      x: startX,
      y: startY,
      startX,
      startY,
      targetX,
      targetY,
      delay: 180 + Math.random() * (reducedMotion ? 500 : 1450),
      startedAt: performance.now(),
      color: ["#ff4057", "#ffd447", "#48a9ff", "#5be28c", "#ff68b8", "#b983ff", "#ff873d", "#4ce8e1"][Math.floor(Math.random() * 8)]
    });
  }

  if (!fireworkFrame) {
    let previousTime = performance.now();
    const animate = now => {
      const delta = Math.min((now - previousTime) / 1000, 0.04);
      previousTime = now;
      const frameWidth = window.innerWidth;
      const frameHeight = window.innerHeight;
      const framePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      if (fireworkCanvas.width !== Math.round(frameWidth * framePixelRatio) || fireworkCanvas.height !== Math.round(frameHeight * framePixelRatio)) {
        fireworkCanvas.width = Math.round(frameWidth * framePixelRatio);
        fireworkCanvas.height = Math.round(frameHeight * framePixelRatio);
        fireworkCanvas.style.width = `${frameWidth}px`;
        fireworkCanvas.style.height = `${frameHeight}px`;
        fireworkContext.setTransform(framePixelRatio, 0, 0, framePixelRatio, 0, 0);
      }
      const context = fireworkContext;
      context.clearRect(0, 0, frameWidth, frameHeight);

      if (now < fireworkFlashUntil) {
        context.fillStyle = `rgba(255, 255, 255, ${0.16 * (fireworkFlashUntil - now) / 75})`;
        context.fillRect(0, 0, frameWidth, frameHeight);
      }

      fireworkLaunches = fireworkLaunches.filter(launch => {
        if (now - launch.startedAt < launch.delay) return true;
        const progress = Math.min((now - launch.startedAt - launch.delay) / 380, 1);
        const previousX = launch.x;
        const previousY = launch.y;
        launch.x = launch.startX + (launch.targetX - launch.startX) * progress;
        launch.y = launch.startY + (launch.targetY - launch.startY) * progress;
        context.beginPath();
        context.moveTo(previousX, previousY);
        context.lineTo(launch.x, launch.y);
        context.strokeStyle = launch.color;
        context.lineWidth = 2;
        context.shadowColor = launch.color;
        context.shadowBlur = 12;
        context.stroke();
        context.shadowBlur = 0;
        if (progress >= 1) burst(launch.targetX, launch.targetY);
        return progress < 1;
      });

      fireworkParticles = fireworkParticles.filter(particle => {
        particle.life += delta;
        if (particle.life >= particle.maxLife) return false;
        const previousX = particle.x;
        const previousY = particle.y;
        const friction = Math.pow(0.985, delta * 60);
        particle.vx *= friction;
        particle.vy = particle.vy * friction + 220 * delta;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        const alpha = 1 - particle.life / particle.maxLife;
        context.globalAlpha = alpha;
        if (particle.symbol) {
          context.font = `${14 + particle.radius * 3}px "Apple Color Emoji", "Segoe UI Emoji", sans-serif`;
          context.fillText(particle.symbol, particle.x, particle.y);
        } else {
          context.beginPath();
          context.moveTo(previousX, previousY);
          context.lineTo(particle.x, particle.y);
          context.strokeStyle = particle.color;
          context.lineWidth = particle.radius;
          context.shadowColor = particle.color;
          context.shadowBlur = 10;
          context.stroke();
          context.shadowBlur = 0;
        }
        context.globalAlpha = 1;
        return particle.x > -30 && particle.x < frameWidth + 30 && particle.y > -30 && particle.y < frameHeight + 30;
      });

      if (fireworkLaunches.length || fireworkParticles.length) {
        fireworkFrame = requestAnimationFrame(animate);
      } else {
        context.clearRect(0, 0, width, height);
        fireworkFrame = 0;
      }
    };
    fireworkFrame = requestAnimationFrame(animate);
  }
}

function playInteractionSound() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return;

  try {
    if (!uiAudioContext) uiAudioContext = new AudioContextConstructor();
    const context = uiAudioContext;
    const play = () => {
      const now = context.currentTime;
      const boom = context.createOscillator();
      const boomGain = context.createGain();
      boom.type = "triangle";
      boom.frequency.setValueAtTime(150, now);
      boom.frequency.exponentialRampToValueAtTime(48, now + 0.22);
      boomGain.gain.setValueAtTime(0.0001, now);
      boomGain.gain.exponentialRampToValueAtTime(0.12, now + 0.012);
      boomGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
      boom.connect(boomGain);
      boomGain.connect(context.destination);
      boom.onended = () => {
        boom.disconnect();
        boomGain.disconnect();
      };
      boom.start(now);
      boom.stop(now + 0.25);

      const pop = context.createOscillator();
      const popGain = context.createGain();
      pop.type = "sine";
      pop.frequency.setValueAtTime(680, now);
      pop.frequency.exponentialRampToValueAtTime(260, now + 0.09);
      popGain.gain.setValueAtTime(0.0001, now);
      popGain.gain.exponentialRampToValueAtTime(0.045, now + 0.006);
      popGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      pop.connect(popGain);
      popGain.connect(context.destination);
      pop.onended = () => {
        pop.disconnect();
        popGain.disconnect();
      };
      pop.start(now);
      pop.stop(now + 0.11);
    };

    if (context.state === "suspended") {
      context.resume().then(play).catch(() => {});
    } else {
      play();
    }
  } catch {
  }
}

function playClickInteraction(event) {
  const target = event.target.closest?.("button, a, .food-card-img, .food-card-body, .cat-full-card, .cat-card-home, [role='button']");
  if (!target || target.matches(":disabled")) return;

  const isFavorite = target.matches(".btn-heart, .detail-actions-row .btn-primary");
  const isCategory = target.matches(".category-pill, .category-filter-bar .chip");
  const isSearch = target.matches(".search-trigger-btn, .hero-search-box .btn-primary, .inline-search .btn-primary");
  const isFoodCard = target.closest(".food-card") && !target.closest(".btn-heart");
  const variant = isFavorite ? "favorite" : isCategory ? "category" : isSearch ? "search" : isFoodCard ? "food" : "click";
  const bounds = target.getBoundingClientRect();
  const clickX = Number.isFinite(event.clientX) && event.detail > 0 ? event.clientX : bounds.left + bounds.width / 2;
  const clickY = Number.isFinite(event.clientY) && event.detail > 0 ? event.clientY : bounds.top + bounds.height / 2;

  createClickExplosion(clickX, clickY, variant);
  playInteractionSound();

  const button = target.matches("button") ? target : target.closest("button");
  if (button && !isFavorite) {
    button.classList.remove("interaction-clicked");
    void button.offsetWidth;
    button.classList.add("interaction-clicked");
    button.addEventListener("animationend", () => button.classList.remove("interaction-clicked"), { once: true });
  }

  if (isFoodCard) {
    const card = target.closest(".food-card");
    card.classList.remove("interaction-card-clicked");
    void card.offsetWidth;
    card.classList.add("interaction-card-clicked");
    card.addEventListener("animationend", () => card.classList.remove("interaction-card-clicked"), { once: true });
  }
}

function initRevealObserver() {
  if (!revealObserver && window.IntersectionObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -20px 0px"
    });

  }

  if (!revealFallbackInitialized) {
    window.addEventListener("scroll", revealVisibleElements, { passive: true });
    window.addEventListener("resize", revealVisibleElements);
    document.addEventListener("visibilitychange", revealVisibleElements);
    revealFallbackInitialized = true;
  }

  document.querySelectorAll(".reveal-item, .section-head, .hero-copy, .hero-showcase, .category-filter-bar").forEach((el) => {
    if (el.classList.contains("is-visible")) return;
    el.classList.add("hidden");
    revealObserver?.observe(el);
  });

  requestAnimationFrame(revealVisibleElements);
  setTimeout(revealVisibleElements, 80);
}

function revealVisibleElements() {
  document.querySelectorAll(".hidden:not(.is-visible)").forEach((el) => {
    if (!el.getClientRects().length) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-visible");
      revealObserver?.unobserve(el);
    }
  });
}

function staggerRevealCards(selector, offset = 0) {
  const items = document.querySelectorAll(selector);
  items.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.transitionDelay = `${offset + index * 80}ms`;
  });
}

function initFoodCardTilt() {
  if (foodCardTiltInitialized) return;
  foodCardTiltInitialized = true;
  const desktopPointer = window.matchMedia("(min-width: 1025px) and (hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.addEventListener("pointermove", event => {
    const card = event.target.closest?.(".food-card");
    if (!card) return;

    if (!desktopPointer.matches || reducedMotion.matches) {
      card.style.removeProperty("--card-tilt-x");
      card.style.removeProperty("--card-tilt-y");
      return;
    }

    const bounds = card.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width;
    const pointerY = (event.clientY - bounds.top) / bounds.height;
    const rotateX = ((0.5 - pointerY) * 6).toFixed(2);
    const rotateY = ((pointerX - 0.5) * 6).toFixed(2);

    card.style.setProperty("--card-tilt-x", `${rotateX}deg`);
    card.style.setProperty("--card-tilt-y", `${rotateY}deg`);
  });

  document.addEventListener("pointerout", event => {
    const card = event.target.closest?.(".food-card");
    if (!card || card.contains(event.relatedTarget)) return;

    card.style.removeProperty("--card-tilt-x");
    card.style.removeProperty("--card-tilt-y");
  });

  window.addEventListener("resize", () => {
    if (desktopPointer.matches) return;
    document.querySelectorAll(".food-card").forEach(card => {
      card.style.removeProperty("--card-tilt-x");
      card.style.removeProperty("--card-tilt-y");
    });
  });
}

function updateCategoryIndicators() {
  document.querySelectorAll(".category-strip, .category-filter-bar").forEach(container => {
    if (!container.getClientRects().length) return;

    const activeButton = container.querySelector(".category-pill.active, .chip.active");
    if (!activeButton) return;

    container.style.setProperty("--indicator-x", `${activeButton.offsetLeft}px`);
    container.style.setProperty("--indicator-y", `${activeButton.offsetTop}px`);
    container.style.setProperty("--indicator-width", `${activeButton.offsetWidth}px`);
    container.style.setProperty("--indicator-height", `${activeButton.offsetHeight}px`);
    container.style.setProperty("--indicator-opacity", "1");
  });
}

// Custom Leaflet Pin Icon Generator
function createCustomPin(food) {
  return L.divIcon({
    className: "custom-map-pin",
    html: `
      <div class="map-pin-inner">
        <div class="pin-head">
          <span class="pin-star">★</span>
          <span>${food.rating}</span>
        </div>
        <div class="pin-tail"></div>
      </div>
    `,
    iconSize: [46, 50],
    iconAnchor: [23, 50],
    popupAnchor: [0, -48]
  });
}

// 4. UI CARD COMPONENTS
function foodCard(f, rankNum = null) {
  const isFavorite = isFav(f.id);
  const rankHtml = rankNum ? `<div class="rank-badge">#${rankNum}</div>` : "";
  return `
    <article class="food-card">
      ${rankHtml}
      <div class="food-card-img" onclick="showDetail(${f.id})" style="cursor:pointer">
        <img src="${f.img}" alt="${f.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80'">
        <button class="btn-heart ${isFavorite ? "on" : ""}" 
                onclick="event.stopPropagation(); toggleFav(${f.id})" 
                aria-label="Simpan Favorit">
          ${isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div class="food-card-body" onclick="showDetail(${f.id})">
        <div>
          <div class="food-tag-row">
            <span class="cat-badge">${f.cat}</span>
            <div class="rating-pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#E6A13B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>${f.rating}</span>
            </div>
          </div>
          <h3>${f.name}</h3>
          <div class="food-meta">
            <span>📍 ${f.area}</span>
          </div>
        </div>
        <div class="food-price">
          <span>${f.price}</span>
          <span class="detail-arrow">Lihat detail →</span>
        </div>
      </div>
    </article>
  `;
}

function homeCatCard(c) {
  return `
    <div class="cat-card-home" onclick="quickSearch('${c[0].split(' ')[0]}')">
      <img src="${c[2]}" alt="${c[0]}" loading="lazy">
      <div class="cat-card-overlay">
        <h4>${c[0]}</h4>
        <span>${c[1]}</span>
      </div>
    </div>
  `;
}

function fullCatCard(c) {
  return `
    <div class="cat-full-card" onclick="quickSearch('${c[0].split(' ')[0]}')">
      <div class="img-box">
        <img src="${c[2]}" alt="${c[0]}" loading="lazy">
      </div>
      <div class="info-box">
        <div>
          <h3>${c[0]}</h3>
          <p>${c[3] || c[1]}</p>
        </div>
        <span class="cat-link-btn">Jelajahi kategori →</span>
      </div>
    </div>
  `;
}

// 5. PAGE RENDERERS
function renderHome() {
  if ($("#homeCategories")) {
    $("#homeCategories").innerHTML = categories.slice(0, 6).map(homeCatCard).join("");
    staggerRevealCards("#homeCategories .cat-card-home", 120);
  }
  if ($("#popularGrid")) {
    $("#popularGrid").innerHTML = foods.slice(0, 4).map(f => foodCard(f)).join("");
    staggerRevealCards("#popularGrid .food-card");
  }
  updateCategoryIndicators();
  setTimeout(() => {
    initRevealObserver();
    setTimeout(initHomeMapPreview, 100);
  }, 30);
}

function renderExplore() {
  const q = ($("#exploreSearch")?.value || "").toLowerCase().trim();
  const area = $("#areaChipGroup .chip.active")?.dataset.area || "";
  const cat = $("#catFilter")?.value || "";

  const filtered = foods.filter(f => {
    const matchSearch = !q || `${f.name} ${f.cat} ${f.area} ${f.desc}`.toLowerCase().includes(q);
    const matchArea = !area || f.area === area;
    const matchCat = !cat || f.cat === cat;
    return matchSearch && matchArea && matchCat;
  });

  if ($("#resultCount")) $("#resultCount").textContent = filtered.length;

  const listContainer = $("#exploreList");
  if (listContainer) {
    if (filtered.length === 0) {
      listContainer.innerHTML = `<div style="padding:30px; text-align:center; color:var(--text-muted)">Kuliner tidak ditemukan. Coba reset filter.</div>`;
    } else {
      listContainer.innerHTML = filtered.map(f => `
        <div class="explore-item-card reveal-item" onclick="focusMapById(${f.id})">
          <img src="${f.img}" alt="${f.name}" loading="lazy">
          <div class="explore-item-info">
            <div>
              <h4>${f.name}</h4>
              <p>📍 ${f.area} · ★ ${f.rating}</p>
            </div>
            <button class="explore-item-btn" onclick="event.stopPropagation(); showDetail(${f.id})">Lihat Detail →</button>
          </div>
        </div>
      `).join("");
      staggerRevealCards("#exploreList .reveal-item", 80);
    }
  }

  if (map) setMapMarkers(filtered);
}

function setAreaFilter(areaName, btn) {
  $$("#areaChipGroup .chip").forEach(c => c.classList.remove("active"));
  if (btn) btn.classList.add("active");
  if (btn) btn.dataset.area = areaName;
  renderExplore();
}

function resetFilters() {
  if ($("#exploreSearch")) $("#exploreSearch").value = "";
  if ($("#catFilter")) $("#catFilter").value = "";
  $$("#areaChipGroup .chip").forEach((c, idx) => {
    c.classList.toggle("active", idx === 0);
    c.dataset.area = "";
  });
  renderExplore();
}

function renderSearchPage() {
  const q = ($("#resultSearchInput")?.value || $("#homeSearch")?.value || "Empal").trim();
  if ($("#searchKeyword")) $("#searchKeyword").textContent = q;

  const results = foods.filter(f => `${f.name} ${f.cat} ${f.area} ${f.desc}`.toLowerCase().includes(q.toLowerCase()));

  if ($("#searchSubtitle")) {
    $("#searchSubtitle").textContent = `Ditemukan ${results.length} kuliner yang sesuai dengan kata kunci "${q}".`;
  }

  const grid = $("#searchGrid");
  if (grid) {
    if (results.length > 0) {
      grid.innerHTML = results.map(f => foodCard(f)).join("");
      staggerRevealCards("#searchGrid .food-card");
    } else {
      grid.innerHTML = `
        <div class="empty-state-box" style="grid-column: 1/-1;">
          <div class="empty-icon">🔍</div>
          <h3>Kuliner "${q}" tidak ditemukan</h3>
          <p>Coba kata kunci lain seperti Nasi, Tahu, Mie, atau Seafood.</p>
          <button class="btn-primary" onclick="quickSearch('Empal')">Lihat Empal Gentong</button>
        </div>
      `;
    }
    initRevealObserver();
  }
}

function showDetail(id) {
  const food = foods.find(f => f.id === id);
  if (!food) return;

  currentDetailId = id;

  const contentBox = $("#detailContent");
  if (!contentBox) return;

  const isFavorite = isFav(food.id);
  const relatedFoods = foods.filter(x => x.id !== food.id && x.area === food.area).concat(foods.filter(x => x.id !== food.id && x.area !== food.area)).slice(0, 3);

  contentBox.innerHTML = `
    <div class="detail-hero-grid">
      <div class="detail-media-side">
        <img class="detail-main-img" src="${food.img}" alt="${food.name}" id="detailMainImg">
        <div class="detail-gallery">
          <img src="${food.img}" onclick="document.getElementById('detailMainImg').src='${food.img}'">
          <img src="${foods[(food.id) % foods.length].img}" onclick="document.getElementById('detailMainImg').src='${foods[(food.id) % foods.length].img}'">
          <img src="${foods[(food.id + 1) % foods.length].img}" onclick="document.getElementById('detailMainImg').src='${foods[(food.id + 1) % foods.length].img}'">
        </div>
      </div>

      <div class="detail-info-side">
        <span class="cat-badge" style="width:max-content">${food.cat}</span>
        <h1>${food.name}</h1>
        
        <div class="detail-rating-row">
          <div class="rating-stars">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#E6A13B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${food.rating} / 5.0</span>
          </div>
          <span style="font-size:0.85rem; color:var(--text-muted)">Ulasan Pengunjung Terverifikasi</span>
        </div>

        <p class="detail-desc">${food.desc}</p>

        <div class="detail-facts-grid">
          <div class="fact-card">
            <span class="label">📍 Lokasi / Area</span>
            <span class="val">${food.area}, Kota Cirebon</span>
          </div>
          <div class="fact-card">
            <span class="label">💰 Kisaran Harga</span>
            <span class="val">${food.price}</span>
          </div>
          <div class="fact-card">
            <span class="label">🕘 Jam Operasional</span>
            <span class="val">${food.hours || "08.00–21.00 WIB"}</span>
          </div>
          <div class="fact-card">
            <span class="label">🍽️ Suasana</span>
            <span class="val">Khas & Autentik</span>
          </div>
        </div>

        <div class="detail-actions-row">
          <button class="btn-primary" onclick="toggleFav(${food.id})">
            ${isFavorite ? "♥ Tersimpan di Favorit" : "♡ Simpan ke Favorit"}
          </button>
          <button class="btn-secondary" onclick="focusMapById(${food.id})">
            📍 Lihat di Peta
          </button>
        </div>
      </div>
    </div>

    <div class="related-section">
      <span class="section-eyebrow">REKOMENDASI LAINNYA</span>
      <h2>Kuliner Khas Cirebon Lainnya</h2>
      <div class="food-grid" style="margin-top:16px">
        ${relatedFoods.map(f => foodCard(f)).join("")}
      </div>
    </div>
  `;

  staggerRevealCards(".related-section .food-card");
  initRevealObserver();
  showPage("detail");
}

function renderCategories() {
  const activeChip = $(".category-filter-bar .chip.active") || $(".category-filter-bar .chip");
  const activeFilter = activeChip?.dataset.category || "all";
  filterCategories(activeFilter, activeChip);
}

function syncCategorySelection(filter, activeBtn) {
  $$(".category-pill").forEach(p => p.classList.toggle("active", p.dataset.category === filter));
  $$(".category-filter-bar .chip").forEach(c => c.classList.toggle("active", c.dataset.category === filter));

  if (activeBtn && !activeBtn.classList.contains("active")) {
    activeBtn.classList.add("active");
  }
  updateCategoryIndicators();
}

function selectCategoryFilter(filter, btn) {
  syncCategorySelection(filter, btn);

  if (!$("#category")?.classList.contains("active")) {
    showPage("category");
    setTimeout(() => filterCategories(filter, $(`.category-filter-bar .chip[data-category="${filter}"]`)), 120);
    return;
  }

  filterCategories(filter, btn);
}

function filterCategories(filter, btn) {
  const selectedFilter = filter || "all";
  const targetBtn = btn || $(`.category-filter-bar .chip[data-category="${selectedFilter}"]`) || $(".category-filter-bar .chip");

  $$(".category-filter-bar .chip").forEach(x => x.classList.toggle("active", x === targetBtn || x.dataset.category === selectedFilter));
  $$(".category-pill").forEach(x => x.classList.toggle("active", x.dataset.category === selectedFilter));
  updateCategoryIndicators();

  const arr = selectedFilter === "all" ? categories : categories.filter(c => c[1] === selectedFilter);
  if ($("#categoryGrid")) {
    $("#categoryGrid").innerHTML = arr.map(fullCatCard).join("");
    staggerRevealCards("#categoryGrid .cat-full-card", 120);
    initRevealObserver();
  }
}

function renderFavorites() {
  const favItems = foods.filter(f => favorites.includes(f.id));
  const grid = $("#favoriteGrid");
  const emptyBox = $("#emptyFav");

  if (grid) {
    grid.innerHTML = favItems.map(f => foodCard(f)).join("");
    staggerRevealCards("#favoriteGrid .food-card");
  }
  if (emptyBox) emptyBox.style.display = favItems.length ? "none" : "block";
  initRevealObserver();
}

function renderPopular(filter = "all") {
  const sorted = foods.slice().sort((a, b) => b.rating - a.rating);
  const topOne = sorted[0];

  const topBanner = $("#topPopularFeatured");
  if (topBanner && topOne) {
    topBanner.innerHTML = `
      <div class="top-featured-info">
        <span class="callout-eyebrow">🔥 PERINGKAT #1 TERPOPULER</span>
        <h2>${topOne.name}</h2>
        <p>${topOne.desc}</p>
        <div style="display:flex; gap:12px; align-items:center;">
          <button class="btn-secondary" onclick="focusMapById(${topOne.id})">Jelajahi Peta →</button>
        </div>
      </div>
      <div class="top-featured-img">
        <img src="${topOne.img}" alt="${topOne.name}" loading="lazy">
      </div>
    `;
  }

  const arr = filter === "all" ? sorted : sorted.filter(f => f.cat === filter);
  const grid = $("#popularPageGrid");
  if (grid) {
    grid.innerHTML = arr.map((f, idx) => foodCard(f, idx + 1)).join("");
    staggerRevealCards("#popularPageGrid .food-card");
    initRevealObserver();
  }
}

function filterPopular(filter, btn) {
  $$(".popular-filter-chips .chip").forEach(x => x.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderPopular(filter);
}

function renderCurrent() {
  const activePage = $(".page.active")?.id;
  if (activePage === "home") renderHome();
  if (activePage === "explore") renderExplore();
  if (activePage === "favorites") renderFavorites();
  if (activePage === "category") renderCategories();
  if (activePage === "popular") renderPopular();
  if (activePage === "detail") showDetail(currentDetailId);
}

// 6. MAP FUNCTIONALITY (LEAFLET WITH CUSTOM PIN BADGES)
function initMap() {
  if (map) return;
  map = L.map("map").setView([-6.723, 108.555], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);
  setMapMarkers(foods);
}

function initHomeMapPreview() {
  if (homePreviewMap) return;
  const container = $("#homeMapPreview");
  if (!container) return;
  homePreviewMap = L.map("homeMapPreview", { zoomControl: false, dragging: false, touchZoom: false, scrollWheelZoom: false }).setView([-6.723, 108.555], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(homePreviewMap);

  foods.forEach(f => {
    L.marker(f.coords, { icon: createCustomPin(f) }).addTo(homePreviewMap);
  });
}

function setMapMarkers(arr) {
  if (!map) return;
  markers.forEach(m => m.remove());
  markers = [];

  arr.forEach(f => {
    const popupContent = `
      <div class="map-popup-card">
        <img src="${f.img}" alt="${f.name}">
        <h4>${f.name}</h4>
        <div class="meta">📍 ${f.area} · ★ ${f.rating} · ${f.price}</div>
        <button onclick="showDetail(${f.id})">Lihat Detail Kuliner</button>
      </div>
    `;
    const marker = L.marker(f.coords, { icon: createCustomPin(f) })
      .addTo(map)
      .bindPopup(popupContent);

    marker.options.foodId = f.id;
    markers.push(marker);
  });
}

function focusMapById(id) {
  const food = foods.find(f => f.id === id);
  if (!food) return;
  showPage("explore");
  setTimeout(() => {
    if (!map) initMap();
    map.flyTo(food.coords, 15, { duration: 1.2 });
    const m = markers.find(x => x.options.foodId === id);
    if (m) m.openPopup();
    const mapEl = $(".map-view-container");
    if (mapEl) mapEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 180);
}

// 7. NAVIGATION & CONTROLLERS
function showPage(id) {
  $$(".page").forEach(p => p.classList.remove("active"));
  const target = $("#" + id);
  if (target) target.classList.add("active");

  $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.page === id));
  updateCategoryIndicators();

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (id === "explore") {
    renderExplore();
    setTimeout(initMap, 150);
  }
  if (id === "category") renderCategories();
  if (id === "favorites") renderFavorites();
  if (id === "popular") renderPopular();
  if (id === "search") renderSearchPage();

  updateFavCount();
  closeMobileNav();
}

function quickSearch(q) {
  showPage("search");
  setTimeout(() => {
    if ($("#resultSearchInput")) $("#resultSearchInput").value = q;
    renderSearchPage();
  }, 50);
}

function doSearch() {
  const q = ($("#homeSearch")?.value || "Empal").trim();
  showPage("search");
  setTimeout(() => {
    if ($("#resultSearchInput")) $("#resultSearchInput").value = q;
    renderSearchPage();
  }, 40);
}

function filterByArea(areaName) {
  showPage("explore");
  setTimeout(() => {
    setAreaFilter(areaName, $(`#areaChipGroup .chip[onclick*="${areaName}"]`));
  }, 100);
}

function scrollToSearch() {
  showPage("home");
  setTimeout(() => {
    $("#searchBox")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
}

// Mobile Menu Navigation
function toggleMobileNav() {
  const nav = $("#mobileNav");
  const toggle = $("#mobileToggle");
  if (!nav) return;

  const isOpen = nav.classList.toggle("open");
  if (toggle) toggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileNav() {
  const nav = $("#mobileNav");
  if (nav) nav.classList.remove("open");
  $("#mobileToggle")?.setAttribute("aria-expanded", "false");
}

function navigateMobile(pageId) {
  showPage(pageId);
}

// Recommendation Modal
function openRecommendationModal() {
  $("#recommendModal")?.classList.add("open");
}

function closeRecommendationModal() {
  $("#recommendModal")?.classList.remove("open");
}

function submitRecommendation() {
  closeRecommendationModal();
  showToast("Terima kasih! Rekomendasi kuliner berhasil dikirim.");
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", playClickInteraction, true);

  const header = $(".topbar");
  if (header) {
    header.classList.add("hidden");
    requestAnimationFrame(() => {
      header.classList.add("is-visible");
    });
  }

  $$(".nav-btn").forEach(b => {
    b.addEventListener("click", () => showPage(b.dataset.page));
  });

  renderHome();
  updateFavCount();
  initFoodCardTilt();
  window.addEventListener("resize", updateCategoryIndicators);

  setTimeout(() => {
    document.body.classList.add("is-loaded");
    initRevealObserver();
  }, 60);
});