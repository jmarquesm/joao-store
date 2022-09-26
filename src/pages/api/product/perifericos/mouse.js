export default function handler(req, res) {
  res.status(200).json({
    id: "5",
    name: "Mouses",
    items: [
      {
        name: "Mouse Gamer HyperX Pulsefire FPS Pro, RGB, 16000DPI, 6 Botoes, Preto, 4P4F7AA",
        marca: "HyperX",
        price: 259.90,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/4/p/4p4f7aa3.jpg",
        offer: 3
      },
      {
        name: "Mouse Gamer Redragon King Cobra 2, RGB, 24000DPI, 8 Botoes, Preto, M711-FPS-1",
        marca: "Redragon",
        price: 199.89,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/7/m711-fps-12.jpg",
        offer: 2
      },
      {
        name: "Mouse Gamer Logitech G305, Wireless, 12000DPI, 6 Botoes, Branco, 910-005290",
        marca: "Logitech",
        price: 299.90,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/1/910-0052901.jpg",
        offer: 5
      },
      {
        name: "Mouse Gamer Fortrek Blackfire, RGB, 7200DPI, 6 Botoes, Preto, 75683",
        marca: "Fortrek",
        price: 55.49,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/7/5/75683.jpg",
        offer: 5
      },
    ]
  });
}