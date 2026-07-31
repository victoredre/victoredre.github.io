import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Colección de certificaciones
const certificationsCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{json,yaml,yml}",
        base: "./src/content/certifications",
    }),
    schema: z.object({
        name: z.string().min(1, "El nombre es requerido"),
        issuer: z.string().min(1, "El emisor es requerido"),
        date: z.coerce.date(),
        badge: z.string().url().optional(),
        url: z.string().url().optional(),
        starred: z.boolean().default(false).optional(),
        description: z.string().optional(),
        credentialId: z.string().optional(),
    }),
});

// Colección de proyectos
const projectsCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx,json,yaml,yml}",
        base: "./src/content/projects",
    }),
    schema: ({ image }) => z.object({
        title: z.string().min(1, "El título es requerido"),
        description: z.string().min(1, "La descripción es requerida"),
        tags: z.array(z.string()).optional(),
        date: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        featured: z.boolean().default(false).optional(),
        link: z.string().url().optional(),
        github: z.string().url().optional(),
        image: image().optional(),
        cover: image().optional(),
        status: z.enum(["completed", "in-progress", "planned"]).default("completed"),
        technologies: z.array(z.string()).optional(),
    }),
});

// Colección de posts
const postsCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx,json,yaml,yml}",
        base: "./src/content/posts",
    }),
    schema: ({ image }) => z.object({
        title: z.string().min(1, "El título es requerido"),
        description: z.string().min(1, "La descripción es requerida"),
        publishDate: z.coerce.date()
            .refine(date => date <= new Date(), {
                message: "La fecha de publicación no puede ser futura"
            }),
        updateDate: z.coerce.date().optional()
            .refine(date => !date || date >= new Date().setFullYear(2000, 0, 1), {
                message: "Fecha de actualización inválida"
            }),
        tags: z.array(z.string()).optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        draft: z.boolean().default(false).optional(),
        author: z.string().optional(),
        authorImage: image().optional(),
        readingTime: z.number().positive().optional(),
        relatedPosts: z.array(z.string()).optional(),
        canonical: z.string().url().optional(),
        ogImage: z.string().url().optional(),
        category: z.string().optional(),
    }),
});

// Exportar todas las colecciones
export const collections = {
    certifications: certificationsCollection,
    projects: projectsCollection,
    posts: postsCollection,
};
