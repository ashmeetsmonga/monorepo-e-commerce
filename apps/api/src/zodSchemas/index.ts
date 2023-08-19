import { z } from "zod";

export const ProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  imgUrl: z.number(),
  price: z.number(),
});
