// src/data/works.ts

export type Work = {
    id: number;
    title: string;
    category: string;
    client?: string;
    role: string[];
    year: string;
    tech: string[];
    type: string;
    description: string;
    remarks?: string;
    image: string;
    url: string;
};

export const works: Work[] = [
    {
        id: 1,
        title: "MERIT OSOLO",
        category: "WEB SITE",
        client: "花王株式会社",
        role: ["コーディング"],
        year: "2025/07",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "client works",
        description:
            "花王株式会社「メリット osolo」のコーディングを担当しました。\nレスポンシブ対応、アニメーション実装など。",
        remarks: "",
        image: "../images/osolo.webp",
        url: "https://example.com",
    },
    {
        id: 2,
        title: "2026 PORTFOLIO",
        category: "WEB SITE",
        role: ["コーディング", "デザイン"],
        year: "2026/07",
        tech: ["Astro", "React", "SCSS", "TypeScript", "GSAP"],
        type: "personal works",
        description:
            "本サイト。\nデザインから実装までを担当。",
        image: "../images/osolo.webp",
        url: "https://jp.rohto.com/digieye/",
    },
    {
        id: 3,
        title: "ロートデジアイ",
        category: "WEB SITE",
        client: "ロート製薬",
        role: ["コーディング"],
        year: "2025/07",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "client works",
        description:
            "ロート製薬「ロートデジアイ」のコーディングを担当しました。\nレスポンシブ対応、アニメーション実装など。",
        image: "../images/osolo.webp",
        url: "https://jp.rohto.com/digieye/",
    },
    {
        id: 4,
        title: "git-app",
        category: "WEB AP",
        role: ["コーディング", "デザイン"],
        year: "2026/10",
        tech: ["Astro", "SCSS", "TypeScript"],
        type: "personal works",
        description:
            "自分用gitコマンド検索アプリ。",
        image: "../images/osolo.webp",
        url: "https://gaff0ireton.github.io/git-app/",
    },
    {
        id: 5,
        title: "1965 ダイバー",
        category: "WEB SITE",
        client: "セイコーウォッチ",
        role: ["コーディング"],
        year: "2025/09",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "client works",
        description:
            "セイコーウォッチ「1965 ダイバー」のコーディングを担当しました。\nレスポンシブ対応など。",
        image: "../images/osolo.webp",
        url: "https://www.seikowatches.com/jp-ja/products/prospex/special/60th_vote/",
    },
    {
        id: 6,
        title: "ハイチオール リンクルメラノブースター",
        category: "WEB SITE",
        client: "エスエス製薬",
        role: ["コーディング"],
        year: "2025/09",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "client works",
        description:
            "エスエス製薬「ハイチオール リンクルメラノブースター」のコーディングを担当しました。\nレスポンシブ対応など。",
        remarks: "",
        image: "../images/osolo.webp",
        url: "https://www.ssp.co.jp/hythiol/products/hwmb/",
    },
    {
        id: 7,
        title: "氣志團万博2025 推し活応援部",
        category: "WEB SITE",
        client: "エプソン",
        role: ["コーディング"],
        year: "2025/09",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "client works",
        description:
            "花王株式会社「メリット osolo」のコーディングを担当しました。\nレスポンシブ対応、アニメーション実装など。",
        image: "../images/osolo.webp",
        url: "https://www.epson.jp/ec/event/kbpk2025/",
    },
    {
        id: 8,
        title: "第二回和漢川柳コンテスト",
        category: "WEB SITE",
        client: "ロート製薬",
        role: ["コーディング"],
        year: "2025/10",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "client works",
        description:
            "花王株式会社「メリット osolo」のコーディングを担当しました。\nレスポンシブ対応など。",
        image: "../images/osolo.webp",
        url: "https://jp.rohto.com/wakansen/senryu/",
    },
    {
        id: 9,
        title: "is Coffee",
        category: "WEB SITE",
        role: ["コーディング", "デザイン"],
        year: "2026/11",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "personal works",
        description:
            "訓練校でのチーム制作で、架空のカフェサイトを制作しました。",
        image: "../images/osolo.webp",
        url: "https://is-coffee.vercel.app/",
    },
    {
        id: 10,
        title: "diary-site",
        category: "WEB SITE",
        role: ["コーディング", "デザイン"],
        year: "2026/8",
        tech: ["Astro", "SCSS", "JavaScript"],
        type: "personal works",
        description:
            "訓練中の課題で、日記サイトを制作しました。",
        image: "../images/osolo.webp",
        url: "https://gaff0ireton.github.io/summer_vacation/",
    },
    {
        id: 11,
        title: "Cafe Campanula",
        category: "WEB SITE",
        role: ["コーディング", "デザイン"],
        year: "2026/8",
        tech: ["HTML", "SCSS", "JavaScript"],
        type: "personal works",
        description:
            "自主制作で、架空のカフェサイトを制作しました。",
        image: "../images/osolo.webp",
        url: "https://gaff0ireton.github.io/Cafe-Campanula/",
    },
];