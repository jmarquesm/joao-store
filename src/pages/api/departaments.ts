// vendors
import { NextApiRequest, NextApiResponse } from "next";

// datas
import categories from "../../data/categories.json";

// typings
import { Departament } from "../../typings/departament";

export async function getDepartaments() {
  return categories;
}

type Data = {
  items: Departament[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const departaments = await getDepartaments();

  res.status(200).json({
    items: departaments,
  });
}
