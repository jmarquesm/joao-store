import product from "../../../../data/products"

export default function handler(req, res) {
  const items = product.filter((produto) => produto.category === "placa-mae")

  res.status(200).json({
    id: "2",
    name: "Placa Mãe",
    items: items
  });
}