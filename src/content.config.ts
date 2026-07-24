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
        pattern: "**/*.{json,yaml,yml}",
        base: "./src/content/projects",
    }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        tags: z.array(z.string()).optional(),
        cover: z.string().optional(),
        startDate: z.coerce.date(),
    }),
});

export const collections = {
    certifications: certificationsCollection,
    projects: projectsCollection,
};
