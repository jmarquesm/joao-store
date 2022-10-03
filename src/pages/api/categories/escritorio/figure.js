import products from "../../../../data/products"

export default function handler(req, res) {

  const items = products.filter((element) => element.category === "figure")

  res.status(200).json({
    id: "9",
    items: items,
    name: "Figures"
  });
}