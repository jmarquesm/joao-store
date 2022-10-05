import products from "../../data/products"
import { shuffle } from "../../utils/shuffeArray";

export default function handler(req, res) {
    const items = products.filter((product) => product.offer > 0)

    res.status(200).json({
        items: shuffle(items),
    });
}