import { Menu, createStyles, Group } from "@mantine/core";
import { NextLink } from "@mantine/next";

const useStyles = createStyles((theme) => ({
  link: {
    cursor: "pointer",
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));
const categories = [
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
  const { classes } = useStyles();

  return (
    <Menu shadow="sm" width={200} className={classes.link}>
      <Menu.Target>
        <Group>Produtos</Group>
      </Menu.Target>

      <Menu.Dropdown ml={50} spacing={5}>
        {categories.map((category, index) => (
          <div key={category.id}>
            {index != 0 && <Menu.Divider />}
            <Menu.Label>{category.label}</Menu.Label>
            {category.items.map((item) => (
              <Menu.Item
                key={item.id}
                component={NextLink}
                href={`/${category.id}/${item.id}`}
              >
                {item.label}
              </Menu.Item>
            ))}
          </div>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
