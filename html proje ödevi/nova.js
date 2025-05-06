// Scroll event'ini dinleyerek sınıfı ekle/kaldır
window.addEventListener('scroll', function () {
    const top2Element = document.querySelector('.top2');
    if (window.scrollY > 60) { // Eğer sayfa 50 pikselden fazla kaydırılmışsa
        top2Element.classList.add('scrolled');
    } else {
        top2Element.classList.remove('scrolled');
    }
});

// Sayfa tamamen yüklendiğinde çalıştırmak için DOMContentLoaded olayını dinliyoruz.
document.addEventListener('DOMContentLoaded', () => {
    // IntersectionObserver nesnesi oluşturuyoruz. Bu nesne hedef elementlerin görünürlük durumunu izler.
    const observer = new IntersectionObserver(
        (entries) => {
            // Gözlemlenen her hedef için (entries) döngü oluşturuyoruz.
            entries.forEach((entry) => {
                // Eğer hedef elementin %60'ı görünüyorsa (isIntersecting true ise)
                if (entry.isIntersecting) {
                    // Hedef elemente 'visible' sınıfını ekliyoruz.
                    entry.target.classList.add('visible');
                } else {
                    // Hedef element görünmez olduğunda 'visible' sınıfını kaldırıyoruz.
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            // Hedefin görünmesi gereken oranını belirliyoruz. Burada %60 (0.6) olarak ayarlandı.
            threshold: 0.6,
        }
    );

    // Hedef bölgeyi seçiyoruz. Bu kod, .nova22 sınıfına sahip elementi hedefler.
    const target = document.querySelector('.nova22'); 
    if (target) {
        // Eğer hedef element varsa, gözlemlemeye başlıyoruz.
        observer.observe(target);
    }
});
