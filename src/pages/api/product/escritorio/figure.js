export default function handler(req, res) {
  res.status(200).json({
    id: "9",
    name: "Figures",
    items: [
      {
        name:
          "Berserk Guts 410 Berserker Armor Ver. Figma PVC Action Figure Collection Figurine Model Toy",
        marca: "Berserk",
        price: 200.00,
        image: "https://s.pacn.ws/1500/ym/berserk-16-scale-action-figure-guts-kyousenshi-armor-623371.1.jpg?v=qm8h7f&width=760",
        offer: 10
      },
      {
        name:
          "Goku Dragon Ball Z Figurinhas Son Figura 20th Aniversário Pvc Toy Action Figure",
        marca: "Dragon Ball Z",
        price: 55.00,
        image: "https://a-static.mlcdn.com.br/1500x1500/action-figure-son-goku-ssj-match-makers-dragon-ball-z-banpresto/shopb/shaf-1208/392d203c33585e2faa25dd45592acbea.jpg",
        offer: ''
      },
      {
        name:
          "One Piece Luffy Anime Action Figure Brinquedos Pvc Nova Coleção Figuras De Coleta De Para O Presente De Natal Japonês Figura",
        marca: "One Piece",
        price: 50.00,
        image: "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/b/i/bibas17391-1.jpg",
        offer: 20
      },
      {
        name: "Arcanine Pokemon Action Figure Boneco Colecionável",
        marca: "Pokemon",
        price: 115.00,
        image: "https://cdn.shopify.com/s/files/1/1144/1890/products/8273ab91-128c-49b8-817f-217599209894.jpg?v=1663845569",
        offer: ''
      },
    ]
  });
}