import products from "../../../../data/products"

export default function handler(req, res) {
  const items = products.filter((produto) => produto.category === "placa-de-video")

  res.status(200).json({
    id: "1",
    name: "Placa de Video",
    items: items
  });
}