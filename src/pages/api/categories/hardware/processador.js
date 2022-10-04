import products from "../../../../data/products"

export default function handler(req, res) {
  const items = products.filter((element) => element.category === "processador")

  res.status(200).json({
    id: "3",
    items: items,
    name: "Processador",
  });
}