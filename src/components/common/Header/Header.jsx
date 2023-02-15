// vendors
import { Group, Burger, Popover, ActionIcon, Indicator } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

// components
import { NavBar } from "../../navBar/NavBar/NavBar";
import { DarkThemeButton } from "../DarkThemeButton";
import { MenuBox } from "../MenuBox/MenuBox";
import { UseModal } from "../../account/UseModal/UseModal";
import { SearchBar } from "../../SearchBar/SearchBar";

// icons
import { IconShoppingCart } from "@tabler/icons";

// styles
import * as S from "./styles";

const pagesMock = [
  { label: "Pagina Inicial", link: "/" },
  { label: "Produtos", component: MenuBox },
  { label: "Conta", component: UseModal },
];

export function Header({ items }) {
  const [opened, { toggle }] = useDisclosure(false);

  const itemsEL = pagesMock.map((item) => {
    if (item.component) {
      return <item.component key={item.label} />;
    }

    return (
      <S.Link key={item.label} href={item.link}>
        {item.label}
      </S.Link>
    );
  });

  const totalDeItensDoCarrinho = items.reduce((acc, product) => acc + product.units, 0);

  return (
    <S.Header height={56} mb={0}>
      <S.Nav>
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
          <S.GroupLinks ml={50} spacing={5}>
            {itemsEL}
          </S.GroupLinks>

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
      </S.Nav>
    </S.Header>
  );
}
