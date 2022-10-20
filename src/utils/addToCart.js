export function addToCart(produto, items, setItems) {
  const novoProduto = {
    ...produto,
    units: 1,
  };

  let itemAllReadyExist = false;
  for (let indexDoItemDoCarrinho in items) {
    const itemDoCarrinho = items[indexDoItemDoCarrinho];
    if (itemDoCarrinho.description === novoProduto.description) {
      items[indexDoItemDoCarrinho].units += 1;
      itemAllReadyExist = true;
    }
  }
  if (!itemAllReadyExist) items.push(novoProduto);

  setItems([...items]);
}