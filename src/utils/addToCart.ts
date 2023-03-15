// typings
import type {Product} from '../typings/products'

export function addToCart(produto: Product, items: Product[], setItems) {
  
  const newProduct: Product = {
    ...produto,
    units: 1,
  };

  let itemAllReadyExist = false;
  for (let indexOfItemCart in items) {
    const itemOfCart = items[indexOfItemCart];
    if (itemOfCart.description === newProduct.description) {
      items[indexOfItemCart].units += 1;
      itemAllReadyExist = true;
    }
  }
  if (!itemAllReadyExist) items.push(newProduct);

  setItems([...items]);
}