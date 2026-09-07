// Tarjimalar
const translations = {
    uz: {
        title: "Azam Ruzibaev",
        intro: "Hammasi shu yerdan boshlanadi :)"
    },
    ru: {
        title: "Азам Рузибаев",
        intro: "Все начинается отсюда :)"
    },
    en: {
        title: "Azam Ruzibaev",
        intro: "It all starts here :)"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('selectedLang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}

// TOGGLE THEME LOGIC (Netlify xatolarisiz xavfsiz ishlaydi)
function initTheme() {
    const themeCheckbox = document.getElementById('theme-checkbox');
    if (!themeCheckbox) return;

    function setTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            themeCheckbox.checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            themeCheckbox.checked = false;
            localStorage.setItem('theme', 'light');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    themeCheckbox.addEventListener('change', (e) => {
        setTheme(e.target.checked);
    });
}

// FLEXBOX CAROUSEL SLIDER LOGIC
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll('.project-card');
    let currentIndex = 0;
    let autoSlideInterval;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    // Avtomatik o'tib turish (har 4 soniyada)
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
}

// DOM Yuklangach ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'uz';
    changeLanguage(savedLang);
    initTheme();
    initCarousel();
});