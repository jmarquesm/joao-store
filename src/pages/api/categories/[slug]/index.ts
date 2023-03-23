// vendors
import { NextApiRequest, NextApiResponse } from "next";

// data
import products from "../../../../data/products.json";
import categories from "../../../../data/categories.json";

// typings
import { Product } from "../../../../typings/products";

type Data =
  | {
      id: number;
      items: Product[];
      name: string;
    }
  | {
      notFound: boolean;
    };

export async function getProductsByCategory(slug: string) {
  const items = products.filter((product) => product.category === slug);

  return items;
}

export async function getCategory(slug: string) {
  const category = categories.find((category) => {
    return category.slug === slug;
  });

  return category;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const slug = String(req.query.slug);
  const category = await getCategory(slug);

  if (!category) {
    return res.status(404).json({
      notFound: true,
    });
  }

  const items = await getProductsByCategory(slug);

  res.status(200).json({
    id: category.id,
    name: category.name,
    items: items,
  });
}
