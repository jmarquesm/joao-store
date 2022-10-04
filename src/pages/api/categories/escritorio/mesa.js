import products from "../../../../data/products"

export default function handler(req, res) {
  const items = products.filter((produto) => produto.category === "mesa")

  res.status(200).json({
    id: "8",
    items: items,
    name: "Mesas",
  });
}