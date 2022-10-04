import products from "../../../../data/products"

export default function handler(req, res) {
  const items = products.filter((produto) => produto.category === "fone-de-ouvido")

  res.status(200).json({
    id: "6",
    items: items,
    name: "Fones de Ouvido",
  });
}