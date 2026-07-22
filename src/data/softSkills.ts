---
import SkillCard from "@/components/SkillCard.astro";

const certifications = [
    {
        image: "/images/nse7.png",
        name: "Fortinet NSE 7 — Network Security Expert",
        description: "Especialista en arquitectura de seguridad FortiGate, SD-WAN avanzado, FortiManager y FortiAnalyzer.",
        credentialUrl: "https://training.fortinet.com/...",
        level: "expert" as const,
        issuer: "Fortinet",
        date: "Jun 2024",
        tags: ["FortiGate", "SD-WAN", "FortiManager", "Enterprise"],
        isVerified: true,
    },
    // ... más certificaciones
];
---

<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {certifications.map((cert) => (
        <SkillCard {...cert} />
    ))}
</section>
