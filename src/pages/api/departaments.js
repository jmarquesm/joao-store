import categories from "../../data/categories"

export default function handler(req, res) {

    res.status(200).json({
        id: "7",
        items: categories,
        name: "Departamentos",
    })
}