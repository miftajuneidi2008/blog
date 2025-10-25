import { z } from "zod";
const MIN_SIZE = 0.5 * 1024 * 1024;
const MAX_SIZE = 2 * 1024 * 1024;
export const CategorySchema = z.object({
  category_name: z
    .string()
    .min(4, { message: "Category name must be at least 4 characters long." }),
  category_photo: z
    .instanceof(File, { message: "Expected a file" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "File must be an image",
    })
    .refine((file) => file.size >= MIN_SIZE, {
      message: "Image must be at least 0.5 MB",
    })
    .refine((file) => file.size <= MAX_SIZE, {
      message: "Image must be at most 2 MB",
    }),
  category_description: z
    .string()
    .min(10, {
      message: "Category description must be at least 10 characters long.",
    }),
});

export const ArticleSchema = z.object({
  article_title: z
    .string()
    .min(3, { message: "Article title must be at least 3 characters long." }),
  article_photo: z
    .instanceof(File, { message: "Expected a file" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "File must be an image",
    })
    .refine((file) => file.size >= MIN_SIZE, {
      message: "Image must be at least 0.5 MB",
    })
    .refine((file) => file.size <= MAX_SIZE, {
      message: "Image must be at most 2 MB",
    }),
  article_description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long." })
});

export type CategorySchemaType = z.infer<typeof CategorySchema>;
export type ArticleSchemaType = z.infer<typeof ArticleSchema>;
