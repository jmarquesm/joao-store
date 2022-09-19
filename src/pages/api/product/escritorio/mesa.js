export default function handler(req, res) {
  res.status(200).json({
    id: "8",
    name: "Mesas",
    items: [
      {
        name: "Mesa Gamer Cougar Deimus 120, RGB, Preto, 3M1202WB.0002",
        marca: "Cougar",
        price: "1.449,90",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/3/m/3m1202wb00024.jpg",
        offer: 10
      },
    ]
  });
}