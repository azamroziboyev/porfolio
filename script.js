// 1. Tarjimalar lug'ati
const translations = {
    uz: {
        title: "Azam Ruzibaev",
        intro: "Hammasi shu yerdan boshlanadi :)"
    },
    ru: {
        title: "Развитие веб-технологий",
        intro: "Сегодня интернет является неотъемлемой частью жизни каждого человека."
    },
    en: {
        title: "The Evolution of Web Technologies",
        intro: "Today, the internet is an integral part of everyone's life."
    }
};

// 2. Tilni o'zgartirish funksiyasi
function changeLanguage(lang) {
    // Sahifadagi barcha data-i18n atributli elementlarni topamiz
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Tanlangan tilni saqlab qo'yish (sahifa yangilanganda o'chib ketmasligi uchun)
    localStorage.setItem('selectedLang', lang);

    // Tugmalarning faol (active) holatini yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
}

// 3. Sahifa yuklanganda saqlangan tilni tiklash
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'uz';
    changeLanguage(savedLang);
});

// ==========================================
// TOGGLE SWITCH MANTIQI
// ==========================================
const themeCheckbox = document.getElementById('theme-checkbox');

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

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(true);
    } else {
        setTheme(false);
    }
});

if (themeCheckbox) {
    themeCheckbox.addEventListener('change', (e) => {
        setTheme(e.target.checked);
    });
}
