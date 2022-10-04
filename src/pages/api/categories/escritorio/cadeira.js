import products from "../../../../data/products"

export default function handler(req, res) {
  const items = products.filter((produto) => produto.category === "cadeira")

  res.status(200).json({
    id: "7",
    items: items,
    name: "Cadeiras",
  });
}