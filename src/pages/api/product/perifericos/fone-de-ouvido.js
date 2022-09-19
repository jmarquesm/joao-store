export default function handler(req, res) {
  res.status(200).json({
    id: "6",
    name: "Fones de Ouvido",
    items: [
      {
        name: "Headset Gamer Corsair Virtuoso RGB Wireless XT, Drivers 50mm, Cinza, CA-9011188-NA",
        marca: "Corsair",
        price: "2.450,50",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/a/ca-9011188-na4.jpg",
        offer: 3
      },
      {
        name: "Headset Gamer Corsair HS80, RGB, Drivers 50mm, Preto, CA-9011237-NA",
        marca: "Corsair",
        price: "775,99",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/a/ca-9011237-na3.jpg",
        offer: 2
      },
      {
        name: "Headset Gamer HyperX CloudX, Drivers 53mm, Preto e Cinza, 4P5H8AA",
        marca: "HyperX",
        price: "319,90",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/4/p/4p5h8aa3.jpg",
        offer: 5
      },
      {
        name: "Headset Gamer HyperX Cloud II, Som Surround 7.1, Drivers 53mm, Branco e Rosa, 4P5E0AA",
        marca: "HyperX",
        price: "449,90",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/4/p/4p5e0aa3.jpg",
        offer: 5
      },
      {
        name: "Headset Gamer HyperX Cloud Stinger, Drivers 50mm, Preto, 4P5L7AAABL",
        marca: "HyperX",
        price: "249,90",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/4/p/4p5l7aaabl3.jpg",
        offer: 5
      },
    ]
  });
}