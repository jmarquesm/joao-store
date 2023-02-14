// vendors
import { Menu, Group } from "@mantine/core";
import { NextLink } from "@mantine/next";

// styles
import * as S from "./styles";

const categoriesMock = [
  {
    label: "Hardware",
    id: "hardware",
    items: [
      { label: "Processador", id: "processador" },
      { label: "Placa de Video", id: "placa-de-video" },
      { label: "Placa Mãe", id: "placa-mae" },
    ],
  },
  {
    label: "Periféricos",
    id: "perifericos",
    items: [
      { label: "Teclado", id: "teclado" },
      { label: "Mouse", id: "mouse" },
      { label: "Fone de Ouvido", id: "fone-de-ouvido" },
    ],
  },
  {
    label: "Escritório",
    id: "escritorio",
    items: [
      { label: "Cadeira", id: "cadeira" },
      { label: "Mesa", id: "mesa" },
      { label: "Figure", id: "figure" },
    ],
  },
];

export function MenuBox() {
  return (
    <S.MenuLink shadow="sm" width={200}>
      <Menu.Target>
        <Group>Produtos</Group>
      </Menu.Target>

      <Menu.Dropdown ml={50} spacing={5}>
        {categoriesMock.map((category, index) => (
          <div key={category.id}>
            {index != 0 && <Menu.Divider />}
            <Menu.Label>{category.label}</Menu.Label>
            {category.items.map((item) => (
              <Menu.Item key={item.id} component={NextLink} href={`/${category.id}/${item.id}`}>
                {item.label}
              </Menu.Item>
            ))}
          </div>
        ))}
      </Menu.Dropdown>
    </S.MenuLink>
  );
}
