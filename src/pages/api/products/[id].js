import products from "../../../data/products"

export default function handler(req, res) {

  const produto = products.find((element) => req.query.id == element.id)

  res.status(200).json(produto);
}