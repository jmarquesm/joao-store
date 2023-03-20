// vendors
import { NextApiRequest, NextApiResponse } from "next";

// datas
import products from "../../data/products.json";

// utils
import { shuffle } from "../../utils/shuffeArray";

// typings
import { Product } from "../../typings/products";

export async function getOffers() {
  const items = products.filter((product) => product.offer !== null);

  return shuffle(items);
}

type Data = {
  items: Product[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const offers = await getOffers();

  res.status(200).json({
    items: offers,
  });
}
