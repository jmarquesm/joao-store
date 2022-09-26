export default function handler(req, res) {
  res.status(200).json({
    id: "3",
    name: "Processador",
    items: [
      {
        name:
          "Processador Intel Core i5-12600KF, 10-Core, 16-Threads, 3.7GHz (4.9GHz Turbo), Cache 20MB, LGA1700, BX8071512600KF-BR",
        marca: "Intel",
        price: 2039.99,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071512600kf-br2.jpg",
        offer: 10
      },
      {
        name:
          "Processador Intel Core i9-12900F, 16-Core, 24-Threads, 2.4GHz (5.1GHz Turbo), Cache 30MB, LGA1700, BX8071512900F",
        marca: "Intel",
        price: 3699.88,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071512900f1.jpg",
        offer: ''
      },
      {
        name: "Processador AMD Ryzen 5 3600, 6-Core, 12-Threads, 3.6GHz (4.2GHz Turbo), Cache 35MB, AM4, 100-100000031SBX",
        marca: "AMD",
        price: 999.99,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000031sbx.jpg",
        offer: 20
      },
      {
        name: "Processador AMD Ryzen 7 5700X, 8-Core, 16-Threads, 3.4GHz (4.6GHz Turbo), Cache 36MB, AM4, 100-100000926WOF",
        marca: "AMD",
        price: 1599.99,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000926wof.jpg",
        offer: ''
      },
    ]
  });
}