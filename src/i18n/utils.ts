import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL, baseOverride?: string) {
    const base = (baseOverride ?? import.meta.env.BASE_URL).replace(/\/$/, "");
    const path = url.pathname.replace(base, "");
    const [, lang] = path.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export { ui }; // Re-export ui for direct access if needed

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function getRelativeLocaleUrl(
    lang: string,
    path: string,
    baseOverride?: string,
) {
    const base = (baseOverride ?? import.meta.env.BASE_URL).replace(/\/$/, "");
    const p = path.startsWith("/") ? path : `/${path}`;
    return `${base}/${lang}${p}`.replace(/\/+$/, "") || "/";
}

export function getI18nStaticPaths() {
    return Object.keys(ui).map((lang) => ({ params: { lang } }));
}

/**
 * Returns a list of available languages with their labels and localized URLs
 * based on the current URL.
 */
export function getAllLanguageUrls(url: URL, baseOverride?: string) {
    const base = (baseOverride ?? import.meta.env.BASE_URL).replace(/\/$/, "");
    const currentLang = getLangFromUrl(url, base);

    // Path without base (e.g. /en/projects)
    const pathname = url.pathname;
    const pathNoBase = pathname.startsWith(base)
        ? pathname.slice(base.length)
        : pathname;

    // Split path to find the lang segment
    // Example: /en/experience -> ["", "en", "experience"]
    const segments = pathNoBase.split("/");

    return [
        { code: "en", name: ui.en["nav.langName"] || "English" },
        { code: "es", name: ui.es["nav.langName"] || "Español" },
        { code: "ja", name: ui.ja["nav.langName"] || "日本語" },
    ].map((langObj) => {
        // Create new segments by replacing the current lang
        const newSegments = [...segments];

        // Find the language segment and replace it
        // The path structure is typically /:lang/..., so segment[1] or segment[0] if no leading slash
        let langIndex = newSegments.findIndex((s) => s in ui);

        if (langIndex !== -1) {
            newSegments[langIndex] = langObj.code;
        } else {
            // Fallback: If no language segment found, insert it at the beginning of the relative path
            if (newSegments[0] === "") {
                newSegments[1] = langObj.code;
            } else {
                newSegments.unshift(langObj.code);
            }
        }

        const newPath = newSegments.join("/");
        return {
            ...langObj,
            url: `${base}${newPath.startsWith("/") ? "" : "/"}${newPath}${url.search}${url.hash}`,
            active: langObj.code === currentLang,
        };
    });
}
