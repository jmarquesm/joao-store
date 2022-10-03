import products from "../../../data/products"

export default function handler(req, res) {
  console.log(req.query)
  res.status(200).json({
    items: products
  });
}