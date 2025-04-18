const languages = ["japanese", "english", "korean"]
const langFlags = ["/assets/images/jp.png", "/assets/images/us.png", "/assets/images/kr.png"]
let curLang = localStorage.getItem("curLang") || 0

const langSelect = document.querySelector(".language-select"),
    langFlag = document.querySelector(".language-flag")

const logo = document.querySelector("#logo-text")

langSelect.addEventListener("click", ()=>{
   toggleLanguage()
})

function checkLanguages() {
    let langAmount = 0
    for (const key in langText) {
        if (Object.keys(langText[key]).length > 0) {
            langAmount += 1
        }
    }

    if (langAmount <= 1) {
        langSelect.style.visibility = "hidden"
    }
}

function toggleLanguage(lang) {
    if (lang === undefined) {
        curLang = (curLang+1)%languages.length
        while (Object.keys(langText[languages[curLang]]).length === 0) {
            curLang = (curLang+1)%languages.length
        }
    } else {
        curLang = lang
    }

    langFlag.src = langFlags[curLang]
    localStorage.setItem("curLang", curLang)

    for(const key in langText["japanese"]) {
        const elem = document.querySelector(`#loc-${key}`)
        if (elem) {
            elem.textContent = langText["japanese"][key]
        }
    }

    if (curLang != 0) { 
        for(const key in langText["english"]) {
            const elem = document.querySelector(`#loc-${key}`)
            if (elem) {
                elem.textContent = langText["english"][key]
            }
        }
    }

    if (curLang != 0 && curLang != 1) {
        for (const key in langText[languages[curLang]]) {
            const elem = document.querySelector(`#loc-${key}`)
            if (elem) {
                elem.textContent = langText[languages[curLang]][key]
            }
        }
    }
}

let langText = {
    japanese: {
        "logo": "公民教育改革運動",
        "slogan": "新自由主義から自由を得よう。",
        "mail": "メール",
        "home": "ホーム",
        "about": "公教改について",
        "news": "お知らせ",
        "events": "イベント",
        "videos": "ビデオ",
        "music": "音楽",
        "articles": "記事",
        "gallery": "ギャラリー",
        "school-issues": "教育制度の問題",
        "roadmap": "ロードマップ",
        "volunteer": "ボランティア方",
        "join-team": "私のチームに入いる",
        "store": "商品",
        "manga-button": "漫画「不登校」",
        "forum": "掲示板",
        "contact": "お問い合わせ",
    },
    english: {
        "logo": "CIVIC EDUCATION\nREFORM",
        "slogan": "IT'S TIME FOR NEOLIBERATION.",
        "mail": "email",
        "home": "home",
        "about": "about",
        "news": "news",
        "events": "events",
        "videos": "videos",
        "music": "music",
        "articles": "articles",
        "gallery": "gallery",
        "school-issues": "issues in the school system",
        "roadmap": "roadmap",
        "volunteer": "volunteer",
        "join-team": "join my team",
        "store": "store",
        "manga-button": "\"Dropout\" manga",
        "forum": "forum",
        "contact": "contact",
    },
    korean: {
        "logo": "공민교육개혁운동",
        "slogan": "신자유주의로부터 자유를 얻자.",
        "mail": "이메일",
        "home": "홈",
        "about": "공교개에 대해",
        "news": "공지",
        "events": "이벤트",
        "videos": "비디오",
        "music": "음악",
        "articles": "기사",
        "gallery": "갤러리",
        "school-issues": "교육제도 문제",
        "roadmap": "로드맵",
        "volunteer": "자원봉사",
        "join-team": "내 팀에 들어가기",
        "store": "상품",
        "manga-button": "만화 \"불등교\"",
        "forum": "게시판",
        "contact": "문의",
    }
}

checkLanguages()
toggleLanguage(curLang)