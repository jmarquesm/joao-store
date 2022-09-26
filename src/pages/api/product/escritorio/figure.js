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
        image: "https://ae01.alicdn.com/kf/Sc5389a696404403d9af4b6523919e41dv/25cm-berserk-tripas-l-figura-anime-guts-berserker-armadura-figura-de-a-o-berserk-preto-espadachim.jpg_Q90.jpg_.webp",
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
        image: "https://cdn.shopify.com/s/files/1/0498/3249/3214/products/product-image-1737174365_1200x1200.jpg?v=1619815118",
        offer: 20
      },
      {
        name: "Arcanine Pokemon Action Figure Boneco Colecionável",
        marca: "Pokemon",
        price: 115.00,
        image: "https://cf.shopee.com.br/file/0c6b56fb26019eb36f5926e1a27d00a4",
        offer: ''
      },
    ]
  });
}