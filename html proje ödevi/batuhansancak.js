let lastScrollY = window.scrollY; // Sayfanın önceki kaydırma pozisyonunu tutar
const header = document.getElementById('main-header'); // Ana header öğesini seç
const topSection = document.querySelector('.top'); // Üst kısımdaki bölüm öğesini seç

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY; // Sayfanın kaydırıldığı mesafe

    // Eğer sayfa kaydırma 100px'yi geçtiyse yazıyı ve menüyü kaybet
    if (scrollPosition > 100) {
        topSection.classList.add('scrolled'); // Üst bölüme "scrolled" sınıfını ekler
        header.classList.add('scrolled'); // Header'a "scrolled" sınıfını ekler
    } else {
        topSection.classList.remove('scrolled'); // "scrolled" sınıfını kaldırır
        header.classList.remove('scrolled'); // "scrolled" sınıfını kaldırır
    }

    // Aşağı kaydırıldığında menüyü gizle, yukarı kaydırıldığında menüyü göster
    if (scrollPosition > lastScrollY) {
        header.classList.add('hidden'); // Aşağı kaydırılırken header'ı gizler
    } else {
        header.classList.remove('hidden'); // Yukarı kaydırılırken header'ı gösterir
    }

    lastScrollY = scrollPosition; // Kaydırma pozisyonunu günceller
});

// item1, item2, item3 öğelerini seç
const items1 = document.querySelectorAll('.item1'); // İlk grup öğeleri seç
const items2 = document.querySelectorAll('.item2'); // İkinci grup öğeleri seç
const items3 = document.querySelectorAll('.item3'); // Üçüncü grup öğeleri seç

// IntersectionObserver ayarları
const options = {
  root: null, // Tüm görünüm alanını gözlemler
  rootMargin: '0px', // Kenar boşluğu yok
  threshold: 0.4 // Öğenin %40'ı göründüğünde tetiklenir
};

// Observer callback fonksiyonu
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Eğer öğe %40 görünüyorsa, .visible sınıfını ekle
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Öğeye "visible" sınıfı eklenir
      observer.unobserve(entry.target); // Öğeyi gözlemlemeyi bırakır
    }
  });
}, options);

// Her bir öğeyi gözlemlemeye başla
items1.forEach(item => {
  observer.observe(item); // item1 grubundaki her öğeyi gözlemler
});

items2.forEach(item => {
  observer.observe(item); // item2 grubundaki her öğeyi gözlemler
});

items3.forEach(item => {
  observer.observe(item); // item3 grubundaki her öğeyi gözlemler
});

// Başlangıç süre değeri (16 gün, 9 saat, 32 dakika, 26 saniye)
let timeLeft = {
    days: 16, // Kalan gün
    hours: 9, // Kalan saat
    minutes: 32, // Kalan dakika
    seconds: 26 // Kalan saniye
};

// Geri sayımı başlatma
const countdownTimer = setInterval(function() {
    // Zamanı her saniye azaltalım
    if (timeLeft.seconds > 0) {
        timeLeft.seconds--; // Saniyeyi 1 azaltır
    } else if (timeLeft.minutes > 0) {
        timeLeft.minutes--; // Dakikayı 1 azaltır
        timeLeft.seconds = 59; // Saniyeyi 59 olarak ayarlar
    } else if (timeLeft.hours > 0) {
        timeLeft.hours--; // Saati 1 azaltır
        timeLeft.minutes = 59; // Dakikayı 59 olarak ayarlar
        timeLeft.seconds = 59; // Saniyeyi 59 olarak ayarlar
    } else if (timeLeft.days > 0) {
        timeLeft.days--; // Günü 1 azaltır
        timeLeft.hours = 23; // Saati 23 olarak ayarlar
        timeLeft.minutes = 59; // Dakikayı 59 olarak ayarlar
        timeLeft.seconds = 59; // Saniyeyi 59 olarak ayarlar
    }

    // Geri sayım sayısını ekranda güncelle
    document.getElementById("days").innerHTML = timeLeft.days; // Günleri günceller
    document.getElementById("hours").innerHTML = timeLeft.hours; // Saatleri günceller
    document.getElementById("minutes").innerHTML = timeLeft.minutes; // Dakikaları günceller
    document.getElementById("seconds").innerHTML = timeLeft.seconds; // Saniyeleri günceller

    // Eğer süre biterse, geri sayımı durdur
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(countdownTimer); // Geri sayımı durdurur
        document.getElementById("countdown-timer").innerHTML = "Zaman Doldu!"; // Mesajı gösterir
    }
}, 1000);  // Her saniye çalışacak

window.addEventListener('scroll', function () {
  var leftContent = document.querySelector('.left-content'); // Sol içerik öğesini seç
  var windowHeight = window.innerHeight; // Pencerenin yüksekliği
  var elementTop = leftContent.getBoundingClientRect().top; // Öğenin üstten uzaklığı

  // Sayfanın %40'ında göründüğünde 'visible' sınıfını ekleyerek animasyonu başlatıyoruz
  if (elementTop < windowHeight * 0.6) {
      leftContent.classList.add('visible'); // Sol içeriğe "visible" sınıfını ekler
  }
});




// Hamburger menüsünü ve menü listesini seçiyoruz
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Hamburger menüsüne tıklanınca menüyü açıyoruz
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Menü öğeleri gizlenip açılır
});
