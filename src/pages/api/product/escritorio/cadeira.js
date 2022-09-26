export default function handler(req, res) {
  res.status(200).json({
    id: "7",
    name: "Cadeiras",
    items: [
      {
        name: "Cadeira Gamer Cooler Master Caliber E1, Preto, CMI-GCE1-BK",
        marca: "Cooler Master",
        price: 1249.90,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/m/cmi-gce1-bk9.jpg",
        offer: 10
      },
      {
        name: "Cadeira Gamer DT3 Sports Rhino, Graphite, 13338-8",
        marca: "DT3 Sports",
        price: 2969.90,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/3/13338-82.jpg",
        offer: ''
      },
    ]
  });
}