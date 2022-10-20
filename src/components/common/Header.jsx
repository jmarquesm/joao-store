import { Header as MantineHeader, Group, Burger, Popover, ActionIcon, Indicator } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingCart } from "@tabler/icons";
import { NavBar } from "../navBar/NavBar";
import { DarkThemeButton } from "./DarkThemeButton";
import Link from "next/link";
import { MenuBox } from "./MenuBox";
import { UseModal } from "../account/UseModal";
import { SearchBar } from "../SearchBar";
import styled from "@emotion/styled";

const StyledALink = styled.a`
  display: block;
  line-height: 1;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.sm}px;
  text-decoration: none;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7])};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]};
  }
`;

const StyledMantineHeader = styled(MantineHeader)`
  padding-left: ${({ theme }) => theme.spacing.md}px;
  padding-right: ${({ theme }) => theme.spacing.md}px;
`;

const StyledDivInner = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1px;
`;

const StyledGroupLinks = styled(Group)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

const pages = [
  { label: "Pagina Inicial", link: "/" },
  { label: "Produtos", component: MenuBox },
  { label: "Conta", component: UseModal },
];

export function Header({ items }) {
  const [opened, { toggle }] = useDisclosure(false);

  const itemsEL = pages.map((item) => {
    if (item.component) {
      return <item.component key={item.label} />;
    }

    return (
      <Link key={item.label} href={item.link}>
        <StyledALink>{item.label}</StyledALink>
      </Link>
    );
  });

  const totalDeItensDoCarrinho = items.reduce((acc, product) => acc + product.units, 0);

  return (
    <StyledMantineHeader height={56} mb={0}>
      <StyledDivInner>
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
          <StyledGroupLinks ml={50} spacing={5}>
            {itemsEL}
          </StyledGroupLinks>

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
      </StyledDivInner>
    </StyledMantineHeader>
  );
}
