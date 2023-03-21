// vendors
import { NextApiRequest, NextApiResponse } from "next";

// data
import products from "../../../data/products.json";

// typing
import { Product } from "../../../typings/products";

type Result =
  | {
      product: Product;
      message?: never;
    }
  | {
      product?: never;
      message: string;
    };

export async function getProduct(id: number): Promise<Product | undefined> {
  const product = products.find((element) => id === element.id);

  return product;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result>) {
  const id = +String(req.query.id);
  const product = await getProduct(id);

  if (!product) {
    return res.status(404).json({
      message: "Not Found",
    });
  }

  res.status(200).json({
    product: product,
  });
}
