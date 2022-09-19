export default function handler(req, res) {
  res.status(200).json({
    id: "4",
    name: "Teclado",
    items: [
      {
        name: "Teclaco Optico Razer Huntsman V2, Chroma, US, Switch Razer Purple, Preto, RZ03-03930400-R3U1",
        marca: "Razer",
        price: "1.499,90",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/z/rz03-03930400-r3u14.jpg",
        offer: 3
      },
      {
        name: "Teclado Mecanico Gamer Cooler Master SK652, RGB, Switch Vermelho, Preto, SK-652-GKTR1-US",
        marca: "Cooler Master",
        price: "769,90",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/k/sk-652-gktr1-us4.jpg",
        offer: 2
      },
      {
        name: "Placa de Video Mancer GeForce RTX 2060 Heimdall, 6GB, GDDR6, 192-bit, MCR-RTX2060-HLL",
        marca: "Corsair",
        price: "363,92",
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/h/ch-9226765-br4.jpg",
        offer: 5
      },
    ]
  });
}