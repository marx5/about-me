const avatar = document.getElementById('avatar');
const body = document.body;
let themeIndex = 0;
const themes = ['theme-default', 'theme-glass', 'theme-neon'];

// Xử lý đổi theme với hiệu ứng
avatar.addEventListener('click', () => {
    body.classList.remove(...themes);
    themeIndex = (themeIndex + 1) % themes.length;
    body.classList.add(themes[themeIndex]);

    avatar.classList.add('rotate-on-click');
    avatar.addEventListener('animationend', () => {
        avatar.classList.remove('rotate-on-click');
    }, { once: true });
});

// Đổi ngôn ngữ
const translations = {
    vi: {
        title: "Giới thiệu bản thân",
        intro: "Xin chào, tôi là một lập trình viên web với kinh nghiệm trong việc phát triển các ứng dụng web hiện đại. Tôi đam mê công nghệ và luôn tìm kiếm cơ hội để học hỏi và cải thiện kỹ năng của mình.",
        "info-title": "Thông tin cá nhân",
        "name-label": "Tên:",
        "birth-label": "Năm sinh:",
        "major-label": "Chuyên ngành:",
        "email-label": "Email:",
        "address-label": "Địa chỉ:",
        "major": "Công nghệ thông tin",
        "address": "Hà Nội, Việt Nam",
        "connect": "Kết nối với tôi trên Facebook"
    },
    en: {
        title: "About Me",
        intro: "Hello, I am a web developer with experience in building modern web applications. I am passionate about technology and always looking for opportunities to learn and improve my skills.",
        "info-title": "Personal Information",
        "name-label": "Name:",
        "birth-label": "Year of Birth:",
        "major-label": "Major:",
        "email-label": "Email:",
        "address-label": "Address:",
        "major": "Information Technology",
        "address": "Hanoi, Vietnam",
        "connect": "Connect with me on Facebook"
    },
    zh: {
        title: "自我介绍",
        intro: "你好，我是一名网页开发人员，拥有开发现代网页应用的经验。我热爱技术，始终寻求学习和提升技能的机会。",
        "info-title": "个人信息",
        "name-label": "姓名：",
        "birth-label": "出生年份：",
        "major-label": "专业：",
        "email-label": "电子邮箱：",
        "address-label": "地址：",
        "major": "信息技术",
        "address": "越南河内",
        "connect": "在 Facebook 上联系我"
    }
};

document.getElementById('language').addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang];
    if (t) {
        for (const key in t) {
            const el = document.getElementById(key);
            if (el) el.innerText = t[key];
        }
    }
});


document.getElementById('language').addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang];
    if (t) {
        for (const key in t) {
            const el = document.getElementById(key);
            if (el) el.innerText = t[key];
        }
    }
});
