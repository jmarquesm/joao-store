export default async function handler(req, res) {
    res.status(200).json([
        {
            label: "Processadores",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000514wof11.jpg",
            category: "hardware",
            subCategory: "processador"
        },
        {
            label: "Placas de Video",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/v/c/vcg3070t8tfxppb13.jpg",
            category: "hardware",
            subCategory: "placa-de-video"
        },
        {
            label: "Placas Mãe",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/a/mag-b560-tomahawk-wifi1.jpg",
            category: "hardware",
            subCategory: "placa-mae"
        },
        {
            label: "Teclados",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/z/rz03-03930400-r3u14.jpg",
            link: "/${categoryid}/${subCategoryid}",
            category: "perifericos",
            subCategory: "teclado"
        },
        {
            label: "Mouses",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/h/ch-93170113.jpg",
            link: "/${categoryid}/${subCategoryid}",
            category: "perifericos",
            subCategory: "mouse"
        },
        {
            label: "Fones de Ouvido",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/a/ca-9011188-na4.jpg",
            link: "/${categoryid}/${subCategoryid}",
            category: "perifericos",
            subCategory: "fone-de-ouvido"
        },
        {
            label: "Cadeiras",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/3/m/3mtitanr-00011.jpg",
            link: "/${categoryid}/${subCategoryid}",
            category: "escritorio",
            subCategory: "cadeira"
        },
        {
            label: "Mesas",
            img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/d/t/dt3-f40-curvada-32142_1.jpg",
            link: "/${categoryid}/${subCategoryid}",
            category: "escritorio",
            subCategory: "mesa"
        },
    ])
}