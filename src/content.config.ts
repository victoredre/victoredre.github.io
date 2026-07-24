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
        date: z.string(), // or date object
        badge: z.string().optional(),
        url: z.string().url().optional(),
        starred: z.boolean().default(false).optional(),
    }),
});

export const collections = {
    certifications: certificationsCollection,
};
