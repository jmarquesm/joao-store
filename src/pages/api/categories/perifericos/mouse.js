import products from "../../../../data/products"

export default function handler(req, res) {
  const items = products.filter((produto) => produto.category === "mouse")

  res.status(200).json({
    id: "5",
    items: items,
    name: "Mouses",
  });
}