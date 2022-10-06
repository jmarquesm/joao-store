import {
  createStyles,
  Header as MantineHeader,
  Group,
  Burger,
  Popover,
  ActionIcon,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingCart } from "@tabler/icons";
import { NavBar } from "../navBar/NavBar";
import { DarkThemeButton } from "./DarkThemeButton";
import Link from "next/link";
import { MenuBox } from "./MenuBox";
import { UseModal } from "../account/UseModal";
import { SearchBar } from "../SearchBar";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 1,
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

const pages = [
  { label: "Pagina Inicial", link: "/" },
  { label: "Produtos", component: MenuBox },
  { label: "Conta", component: UseModal },
];

export function Header({ items }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const itemsEL = pages.map((item) => {
    if (item.component) {
      return <item.component key={item.label} />;
    }

    return (
      <Link key={item.label} href={item.link}>
        <a className={classes.link}>{item.label}</a>
      </Link>
    );
  });

  const totalDeItensDoCarrinho = items.reduce((acc, product) => acc + product.units, 0);

  return (
    <MantineHeader height={56} className={classes.header} mb={0}>
      <div className={classes.inner}>
        <Group>
          <Popover opened={opened} closeOnClickOutside onClick={toggle} size="sm">
            <Popover.Target>
              <Burger opened={opened} onClick={toggle} size="sm" />
            </Popover.Target>
            <Popover.Dropdown p={0} ml={8}>
              <NavBar />
            </Popover.Dropdown>
          </Popover>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {itemsEL}
          </Group>

          <SearchBar />

          <Indicator label={totalDeItensDoCarrinho} inline size={15} overflowCount={99}>
            <Link href={"/carrinho"}>
              <ActionIcon color="blue">
                <IconShoppingCart size={22} />
              </ActionIcon>
            </Link>
          </Indicator>

          <DarkThemeButton />
        </Group>
      </div>
    </MantineHeader>
  );
}
