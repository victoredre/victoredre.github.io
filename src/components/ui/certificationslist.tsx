import React, { useState, useMemo } from "react";

interface Certification {
    id: string;
    data: {
        name: string;
        issuer: string;
        date: string;
        badge?: string;
        url?: string;
        starred?: boolean;
    };
}

interface CertificationListProps {
    certifications: Certification[];
    labels: {
        sortDesc: string;
        sortAsc: string;
        sortBy: string;
    };
}

export const CertificationList: React.FC<CertificationListProps> = ({
    certifications,
    labels,
}) => {
    const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

    const sortedCertifications = useMemo(() => {
        return [...certifications].sort((a, b) => {
            const dateA = new Date(a.data.date).getTime();
            const dateB = new Date(b.data.date).getTime();
            return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
        });
    }, [certifications, sortOrder]);

    const getBadgeUrl = (badgePath?: string) => {
        if (!badgePath) return "";
        if (badgePath.startsWith("http")) return badgePath;
        // Assuming base path is handled or relative from root.
        // In React/Astro, for public assets, starting with / is usually usually enough if base is root.
        // If site has base path, it should be passed or handled.
        // For simplicity here, we'll assume the passed props might handle it or we use relative.
        // Actually, passing the processed URL from Astro is safer, but let's handle the simple case.
        return badgePath; // Logic handled in parent or acceptable defaults
    };

    return (
        <div className="space-y-8">
            {/* Controls */}
            <div className="flex justify-end items-center gap-4">
                <span className="text-gray-400 text-sm">{labels.sortBy}:</span>
                <div className="flex bg-charcoal rounded-lg p-1 border border-white/10">
                    <button
                        onClick={() => setSortOrder("desc")}
                        className={`px-3 py-1.5 rounded-md text-sm transition-all relative ${
                            sortOrder === "desc"
                                ? "bg-gold text-gunmetal font-bold shadow-sm z-10"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        {labels.sortDesc}
                    </button>
                    <button
                        onClick={() => setSortOrder("asc")}
                        className={`px-3 py-1.5 rounded-md text-sm transition-all relative ${
                            sortOrder === "asc"
                                ? "bg-gold text-gunmetal font-bold shadow-sm z-10"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                        {labels.sortAsc}
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedCertifications.map((cert) => (
                    <a
                        key={cert.id}
                        href={cert.data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 rounded-xl bg-charcoal border border-white/5 hover:border-gold/30 transition-all hover:shadow-lg hover:shadow-gold/5 group h-full relative"
                    >
                        {cert.data.starred && (
                            <div
                                className="absolute top-4 right-4 text-gold opacity-80 group-hover:opacity-100 transition-opacity"
                                title="Featured Certification"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        )}
                        <div className="flex items-start gap-4">
                            {cert.data.badge && (
                                <div className="flex-shrink-0">
                                    <img
                                        src={cert.data.badge}
                                        alt={cert.data.name}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                            )}
                            <div className="flex-grow">
                                <h3 className="text-lg font-heading font-bold text-light group-hover:text-gold transition-colors line-clamp-2">
                                    {cert.data.name}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    {cert.data.issuer}
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    {cert.data.date}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
