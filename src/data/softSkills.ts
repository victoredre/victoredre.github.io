---
// SkillCard.astro — Diseño profesional dark theme
// Compatible con tu sistema de colores existente

interface SkillCardProps {
    image?: string;
    name: string;
    description: string;
    showDescription?: boolean;
    credentialUrl: string;
    level?: "beginner" | "intermediate" | "advanced" | "expert";
    issuer?: string;
    date?: string;
    tags?: string[];
    isVerified?: boolean;
}

const {
    image,
    name,
    description,
    showDescription = true,
    credentialUrl,
    level,
    issuer,
    date,
    tags = [],
    isVerified = false,
} = Astro.props as SkillCardProps;

const levelConfig = {
    beginner: {
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/15",
        fill: "bg-emerald-400",
        width: "w-[25%]",
        label: "Principiante",
    },
    intermediate: {
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/15",
        fill: "bg-blue-400",
        width: "w-[50%]",
        label: "Intermedio",
    },
    advanced: {
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/15",
        fill: "bg-amber-400",
        width: "w-[75%]",
        label: "Avanzado",
    },
    expert: {
        color: "text-violet-400",
        bg: "bg-violet-400/10",
        border: "border-violet-400/15",
        fill: "bg-violet-400",
        width: "w-full",
        label: "Experto",
    },
};

const hasImage = image && image.trim() !== "";
---

<article
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#161a20] shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#f5c842]/25 hover:bg-[#1c2129] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(245,200,66,0.25)]"
>
    {/* Línea de acento dorada animada en hover */}
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f5c842] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

    {/* Imagen o Fallback */}
    <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="group/img relative block w-full overflow-hidden"
        style="aspect-ratio: 16/10;"
        aria-label={`Ver credencial de ${name}`}
    >
        {hasImage ? (
            <img
                src={image}
                alt={`Certificación ${name}`}
                class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                loading="lazy"
                onerror="this.parentElement.classList.add('fallback-active')"
            />
        ) : (
            <div class="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1a1f27] to-[#232a35]">
                <svg class="h-12 w-12 text-white/20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span class="text-xs font-medium text-white/30">Credencial digital</span>
            </div>
        )}

        {/* Gradiente inferior para legibilidad */}
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1115]/70 via-transparent to-transparent" />

        {/* Overlay hover con CTA */}
        <div class="absolute inset-0 flex items-center justify-center bg-[#0f1115]/50 opacity-0 backdrop-blur-[2px] transition-all duration-350 group-hover:opacity-100">
            <span class="inline-flex translate-y-3 items-center gap-2 rounded-full bg-[#f5c842] px-5 py-2.5 text-xs font-bold text-[#0f1115] shadow-[0_4px_20px_rgba(245,200,66,0.3)] transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 hover:bg-[#ffe066] hover:shadow-[0_6px_28px_rgba(245,200,66,0.4)]">
                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Ver credencial
            </span>
        </div>

        {/* Badge Verificado */}
        {isVerified && (
            <div class="absolute right-3.5 top-3.5 z-10 inline-flex animate-[badgeIn_0.5s_cubic-bezier(0.16,1,0.3,1)_0.3s_both] items-center gap-1.5 rounded-full border border-emerald-400/20 bg-[#0f1115]/85 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-400 backdrop-blur-xl">
                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Verificado
            </div>
        )}
    </a>

    {/* Contenido */}
    <div class="flex flex-1 flex-col gap-3.5 px-5 pb-5 pt-4">
        {/* Título */}
        <h3 class="text-[17px] font-bold leading-snug tracking-tight text-[#f0f2f5]">
            {name}
        </h3>

        {/* Meta: Emisor + Fecha */}
        {(issuer || date) && (
            <div class="flex flex-wrap items-center gap-3.5 text-xs text-[#8b92a3]">
                {issuer && (
                    <span class="inline-flex items-center gap-1">
                        <svg class="h-3.5 w-3.5 text-[#5a6270]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                        {issuer}
                    </span>
                )}
                {date && (
                    <span class="inline-flex items-center gap-1">
                        <svg class="h-3.5 w-3.5 text-[#5a6270]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {date}
                    </span>
                )}
            </div>
        )}

        {/* Nivel + Barra de progreso */}
        {level && levelConfig[level] && (
            <div class="flex flex-col gap-2">
                <span class={`inline-flex w-fit items-center gap-1.5 rounded-full border ${levelConfig[level].border} ${levelConfig[level].bg} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${levelConfig[level].color}`}>
                    <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    {levelConfig[level].label}
                </span>
                <div class="h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div class={`h-full rounded-full ${levelConfig[level].fill} ${levelConfig[level].width} transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`} />
                </div>
            </div>
        )}

        {/* Descripción */}
        {showDescription && (
            <p class="text-[13.5px] leading-relaxed text-[#8b92a3]">
                {description}
            </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
            <div class="mt-auto flex flex-wrap gap-1.5 pt-1">
                {tags.map((tag) => (
                    <span class="cursor-default rounded-md border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#5a6270] transition-all duration-200 hover:border-[#f5c842]/20 hover:bg-[#f5c842]/10 hover:text-[#f5c842]">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </div>
</article>

<style>
    @keyframes badgeIn {
        from {
            opacity: 0;
            transform: scale(0.8) translateY(-8px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
</style>
