import products from "../../../../data/products"

export default function handler(req, res) {
  const items = products.filter((produto) => produto.category === "teclado")

  res.status(200).json({
    id: "4",
    items: items,
    name: "Teclado",
  });
}