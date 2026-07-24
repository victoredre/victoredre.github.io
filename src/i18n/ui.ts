// src/i18n/utils.ts - ARCHIVO COMPLETO

export const languages = {
    en: "English",
    es: "Español",
    ja: "日本語",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export type Lang = keyof typeof ui;

export const ui = {
    en: {
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.tech": "Tech Stack",
        "nav.certifications": "Certifications",
        "nav.experience": "Experience",
        "nav.experienceKey": "Work History & Impact",
        "nav.language": "Language",
        "nav.langName": "English",
        "nav.contact": "Contact",
        "hero.cta": "Download CV",
        "hero.greeting": "Hi, I'm",
        "hero.currentRole": "Currently At",
        "hero.description": "Specializing in high-scalability platforms, Cloud solutions, and robust software architectures.",
        "hero.viewProjects": "View Projects",
        "about.p1": "Systems Engineer with experience in developing <span class='text-[#e1e1e0] font-semibold'>high-scalability platforms</span> and <span class='text-[#e1e1e0] font-semibold'>digital transformation</span> in the education and financial sectors. Specialized in creating quality, maintainable, and scalable software using technologies like <span class='text-[#c08b5a]'>Java, Spring Boot, Python</span>, and <span class='text-[#c08b5a]'>Cloud Computing</span>.",
        "about.p2": "I have a strong interest in <span class='text-[#e1e1e0] font-semibold'>Software Architecture</span>, <span class='text-[#e1e1e0] font-semibold'>DevOps</span>, and <span class='text-[#e1e1e0] font-semibold'>Data Science</span>. I enjoy collaborating in multidisciplinary teams, optimizing processes, and solving complex problems in dynamic technological environments.",
        "section.viewAllCerts": "View all certifications ->",
        "section.viewAllProjects": "View all projects archive",
        "section.viewFullTech": "View full tech stack ->",
        "section.viewFullExperience": "View Full Experience",
        "section.downloadResume": "Download PDF Resume",
        "ui.professional": "Professional",
        "ui.current": "Present",
        "ui.all": "All",
        "ui.filterBy": "Filter by",
        "ui.more": "More",
        "ui.noProjects": "No projects found for this filter.",
        "ui.sortBy": "Sort by Date",
        "ui.sortDesc": "Newest",
        "ui.sortAsc": "Oldest",
        "page.techStackTitle": "Full Technology Stack",
        "page.techStackDescription": "A comprehensive overview of the tools, languages, and frameworks I use to build robust digital solutions.",
        "page.projectsDescription": "A showcase of my technical projects, featuring scalable backend architectures and full-stack applications.",
        "page.certificationsDescription": "Professional certifications and achievements validating my technical expertise.",
        "404.title": "Page Not Found",
        "404.description": "The page you are looking for doesn't exist or has been moved.",
        "404.button": "Back to Home",
        "404.unsupportedLang": "The requested language is not supported. Redirecting to English version...",
        "footer.copyright": "© 2026 MeloDev. All rights reserved.",
        "aria.page": "page",
        "hero.latestAchievement": "Latest Achievement",
        "credly.verified": "Verified Credentials",
        "credly.description": "Verify all my digital badges and certifications directly on Credly.",
        "credly.viewProfile": "View Profile",
    },
    es: {
        "nav.projects": "Proyectos",
        "nav.about": "Sobre mí",
        "nav.tech": "Tecnologías",
        "nav.certifications": "Certificaciones",
        "nav.experience": "Experiencia",
        "nav.experienceKey": "Trayectoria & Impacto",
        "nav.language": "Idioma",
        "nav.langName": "Español",
        "nav.contact": "Contacto",
        "hero.cta": "Descargar CV",
        "hero.greeting": "Hola, soy",
        "hero.currentRole": "Actualmente en",
        "hero.description": "Especializado en plataformas de alta escalabilidad, soluciones Cloud y arquitecturas de software robustas.",
        "hero.viewProjects": "Ver Proyectos",
        "about.p1": "Ingeniero de Sistemas con experiencia en el desarrollo de <span class='text-[#e1e1e0] font-semibold'>plataformas de alta escalabilidad</span> y <span class='text-[#e1e1e0] font-semibold'>transformación digital</span> en los sectores educativo y financiero. Especializado en crear software de calidad, mantenible y escalable utilizando tecnologías como <span class='text-[#c08b5a]'>Java, Spring Boot, Python</span> y <span class='text-[#c08b5a]'>Cloud Computing</span>.",
        "about.p2": "Gran interés en el diseño de <span class='text-[#e1e1e0] font-semibold'>Arquitecturas de Software</span>, <span class='text-[#e1e1e0] font-semibold'>DevOps</span> y <span class='text-[#e1e1e0] font-semibold'>Ciencia de Datos</span>. Disfruto colaborar en equipos multidisciplinarios, optimizar procesos y resolver problemas complejos en entornos tecnológicos dinámicos.",
        "section.viewAllCerts": "Ver todas las certificaciones ->",
        "section.viewAllProjects": "Ver archivo de proyectos",
        "section.viewFullTech": "Ver todo el stack tecnológico ->",
        "section.viewFullExperience": "Ver Experiencia Completa",
        "section.downloadResume": "Descargar CV en PDF",
        "ui.professional": "Profesional",
        "ui.current": "Actualidad",
        "ui.all": "Todos",
        "ui.filterBy": "Filtrar por",
        "ui.more": "Más",
        "ui.noProjects": "No se encontraron proyectos para este filtro.",
        "ui.sortBy": "Ordenar por Fecha",
        "ui.sortDesc": "Más recientes",
        "ui.sortAsc": "Más antiguos",
        "page.techStackTitle": "Stack Tecnológico Completo",
        "page.techStackDescription": "Una visión completa de las herramientas, lenguajes y frameworks que utilizo para construir soluciones digitales robustas.",
        "page.projectsDescription": "Una muestra de mis proyectos técnicos, destacando arquitecturas backend escalables y aplicaciones full-stack.",
        "page.certificationsDescription": "Certificaciones profesionales y logros que validan mi experiencia técnica.",
        "404.title": "Página no encontrada",
        "404.description": "La página que buscas no existe o ha sido movida.",
        "404.button": "Volver al Inicio",
        "404.unsupportedLang": "El idioma solicitado no está soportado. Redírigiendo a la versión en inglés...",
        "footer.copyright": "© 2026 MeloDev. Todos los derechos reservados.",
        "aria.page": "página",
        "hero.latestAchievement": "Último Logro",
        "credly.verified": "Credenciales Verificadas",
        "credly.description": "Verifica todas mis insignias y certificados digitales directamente en Credly.",
        "credly.viewProfile": "Ver Perfil",
    },
    ja: {
        "nav.projects": "プロジェクト",
        "nav.about": "自己紹介",
        "nav.tech": "スキルスタック",
        "nav.certifications": "認定資格",
        "nav.experience": "職歴",
        "nav.experienceKey": "職歴と実績",
        "nav.language": "言語",
        "nav.langName": "日本語",
        "nav.contact": "お問い合わせ",
        "hero.cta": "履歴書をダウンロード",
        "hero.greeting": "こんにちは、私は",
        "hero.currentRole": "現在",
        "hero.description": "高スケーラビリティ・プラットフォーム、クラウドソリューション、および堅牢なソフトウェアアーキテクチャを専門としています。",
        "hero.viewProjects": "プロジェクトを見る",
        "about.p1": "システムエンジニアとして、教育および金融分野における<span class='text-[#e1e1e0] font-semibold'>高スケーラビリティ・プラットフォーム</span>の開発や<span class='text-[#e1e1e0] font-semibold'>デジタルトランスフォーメーション</span>の経験があります。<span class='text-[#c08b5a]'>Java, Spring Boot, Python</span>, <span class='text-[#c08b5a]'>クラウドコンピューティング</span>などの技術を用いて、高品質で保守性が高く、スケーラブルなソフトウェアの構築に特化しています。",
        "about.p2": "<span class='text-[#e1e1e0] font-semibold'>ソフトウェアアーキテクチャ</span>、<span class='text-[#e1e1e0] font-semibold'>DevOps</span>、<span class='text-[#e1e1e0] font-semibold'>データサイエンス</span>に強い関心があります。多角的なチームでのコラボレーション、プロセスの最適化、そしてダイナミックな技術環境における複雑な問題の解決を楽しんでいます。",
        "section.viewAllCerts": "すべての認定資格を見る ->",
        "section.viewAllProjects": "プロジェクトアーカイブを見る",
        "section.viewFullTech": "スキルスタックの詳細を見る ->",
        "section.viewFullExperience": "職歴の詳細を見る",
        "section.downloadResume": "履歴書をダウンロード (PDF)",
        "ui.professional": "プロフェッショナル",
        "ui.current": "現在",
        "ui.all": "すべて",
        "ui.filterBy": "フィルター",
        "ui.more": "詳細",
        "ui.noProjects": "該当するプロジェクトが見つかりませんでした。",
        "ui.sortBy": "日付で並べ替え",
        "ui.sortDesc": "新しい順",
        "ui.sortAsc": "古い順",
        "page.techStackTitle": "スキルスタック",
        "page.techStackDescription": "デジタルソリューションを構築するために使用しているツール、言語、フレームワークの概要です。",
        "page.projectsDescription": "スケーラブルなバックエンドアーキテクチャやフルスタックアプリケーションなど、私の技術プロジェクトの紹介です。",
        "page.certificationsDescription": "私の技術的な専門知識を証明するプロフェッショナル認定資格と実績です。",
        "404.title": "ページが見つかりません",
        "404.description": "お探しのページは存在しないか、移動した可能性があります。",
        "404.button": "ホームに戻る",
        "404.unsupportedLang": "リクエストされた言語はサポートされていません。英語版にリダイレクトしています...",
        "footer.copyright": "© 2026 MeloDev. All rights reserved.",
        "aria.page": "ページ",
        "hero.latestAchievement": "最新の実績",
        "credly.verified": "確認済みの資格",
        "credly.description": "Credlyで私のデジタルバッジと認定資格をすべて確認できます。",
        "credly.viewProfile": "プロフィールを表示",
    },
} as const;

// --- LO QUE TE FALTABA ---

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang as Lang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return (ui[lang] as any)[key]?? (ui[defaultLang] as any)[key]?? key;
  };
}

export function getI18nStaticPaths() {
  return Object.keys(ui).map((lang) => {
    const param = lang === defaultLang &&!showDefaultLang? undefined : lang;
    return { params: { lang: param } };
  });
}
