// typings
import type { Product } from "../typings/products";
import { IconCheck } from "@tabler/icons";
import { showNotification } from "@mantine/notifications";

function addNotification() {
  showNotification({
    icon: <IconCheck size={20} />,
    title: "Produto adicionado ao carrinho",
    message: "",
    autoClose: 2000,
  });
}

export function addToCart(produto: Product, items: Product[], setItems: (items: Product[]) => void) {
  const newProduct: Product = {
    ...produto,
    units: 1,
  };

  let itemAllReadyExist = false;
  for (const item of items) {
    if (item.description === newProduct.description) {
      if (item.units == undefined) {
        item.units = 1;
      }
      item.units += 1;
      itemAllReadyExist = true;
    }
  }

  if (!itemAllReadyExist) items.push(newProduct);

  setItems([...items]);
  addNotification();
}
