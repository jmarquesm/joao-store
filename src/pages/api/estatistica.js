export default async function handler(req, res) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })
  res.status(200).json([
    {
      title: "Visitantes",
      stats: "252",
      description: "Está pagina foi visitada 252 vezes hoje",
    },
    {
      title: "Novos Usuários",
      stats: "126",
      description: "126 novas contas criadas esse mes",
    },
    {
      title: "Compras Feitas",
      stats: "200",
      description: "200 compras realizadas este mes, 96% de satisfação",
    },
  ]);
}