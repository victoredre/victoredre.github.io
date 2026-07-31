import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const certificationsCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{json,yaml,yml}",
        base: "./src/content/certifications",
    }),
    schema: z.object({
        name: z.string(),
        issuer: z.string(),
        date: z.string(),
        badge: z.string().optional(),
        url: z.string().url().optional(),
        starred: z.boolean().default(false).optional(),
    }),
});

const projectsCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{md,json,yaml,yml}",
        base: "./src/content/projects",
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        date: z.coerce.date(),
        featured: z.boolean().default(false).optional(),
        link: z.string().url().optional(),
        image: image().optional(),
    }),
});

const postsCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{md,json,yaml,yml}",
        base: "./src/content/posts",
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        cover: image().optional(),
    }),
});

export const collections = {
    certifications: certificationsCollection,
    projects: projectsCollection,
    posts: postsCollection,
};
