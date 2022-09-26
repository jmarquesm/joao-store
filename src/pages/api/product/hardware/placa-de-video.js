export default function handler(req, res) {
  res.status(200).json({
    id: "1",
    name: "Placa de Video",
    items: [
      {
        name:
          "Placa de Video PNY Geforce RTX 3060, 12GB, GDDR6, 192-Bit, VCG306012DFBPB1",
        marca: "PNY",
        price: 2599.99,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/v/c/vcg306012dfbpb14.jpg",
        offer: 3
      },
      {
        name:
          "Placa de Video Asus Radeon RX 6750 XT Dual OC Edition, 12GB, GDDR6, 192-bit, DUAL-RX6750XT-O12G",
        marca: "ASUS",
        price: 5999.98,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/d/u/dual-rx6750xt-o12g.jpg",
        offer: 2
      },
      {
        name: "Placa de Video Mancer GeForce RTX 2060 Heimdall, 6GB, GDDR6, 192-bit, MCR-RTX2060-HLL",
        marca: "Mancer",
        price: 1749.90,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-rtx2060-hll2.jpg",
        offer: 5
      },
      {
        name: "Placa de Video PNY GeForce GTX 1650, 4GB, GDDR6, 128-bit, VCG16504D6SFMPB1",
        marca: "PNY",
        price: 1499.04,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/v/c/vcg16504d6sfmpb1_1.jpg",
        offer: ''
      },
      {
        name: "Placa de Video Afox GeForce GTX 750TI, 4GB, GDDR5, 128-bit, AF750TI-4096D5H1-V2",
        marca: "AFOX",
        price: 799.90,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/f/af750ti-4096d5h1-v22.jpg",
        offer: ''
      },
    ]
  });
}