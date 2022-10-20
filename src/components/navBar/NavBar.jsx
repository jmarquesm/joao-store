import { Navbar, Group, Code, ScrollArea } from "@mantine/core";
import { IconPhone, IconKeyboard, IconSection, IconArmchair, IconHome } from "@tabler/icons";
import { UserButton } from "./userButton";
import { LinksGroup } from "./navBarLinkGroup";
import styled from "@emotion/styled";

const mockdata = [
  {
    label: "Pagina Inicial",
    icon: IconHome,
    initiallyOpened: true,
    link: "/",
  },
  {
    label: "Hardware",
    icon: IconSection,
    initiallyOpened: false,
    links: [
      {
        label: "Processador",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "hardware", subCategory: "processador" },
        },
      },
      {
        label: "Placa de Video",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "hardware", subCategory: "placa-de-video" },
        },
      },
      {
        label: "Placa Mãe",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "hardware", subCategory: "placa-mae" },
        },
      },
    ],
  },
  {
    label: "Periféricos",
    icon: IconKeyboard,
    links: [
      {
        label: "Teclado",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "perifericos", subCategory: "teclado" },
        },
      },
      {
        label: "Mouse",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "perifericos", subCategory: "mouse" },
        },
      },
      {
        label: "Fone de Ouvido",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "perifericos", subCategory: "fone-de-ouvido" },
        },
      },
    ],
  },
  {
    label: "Escritório",
    icon: IconArmchair,
    links: [
      {
        label: "Cadeira",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "escritorio", subCategory: "cadeira" },
        },
      },
      {
        label: "Mesa",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "escritorio", subCategory: "mesa" },
        },
      },
      {
        label: "Figure",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "escritorio", subCategory: "figure" },
        },
      },
    ],
  },
  { label: "Contato", icon: IconPhone, link: "/contato" },
];

const StyledNavbarMain = styled(Navbar)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
  width: 95vw;
  height: 92.3vh;
  @media screen and (min-width: 768px) {
    height: 600px;
    width: 300px;
  }
`;

const StyledNavbarSectionHeader = styled(Navbar.Section)`
  padding: ${(p) => p.theme.spacing.md}px;
  padding-top: 0;
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

const StyledCodeLogo = styled(Code)`
  font-weight: 700;
`;

const StyledNavSectionLinks = styled(Navbar.Section)`
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
`;

const StyledDivLinksInner = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xl}px;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

const StyledNavbarSectionFooter = styled(Navbar.Section)`
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

export function NavBar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <StyledNavbarMain p="md" pb={0}>
      <StyledNavbarSectionHeader>
        <Group position="apart">
          <StyledCodeLogo>JOÃO STORE</StyledCodeLogo>
        </Group>
      </StyledNavbarSectionHeader>

      <StyledNavSectionLinks grow component={ScrollArea}>
        <StyledDivLinksInner>{links}</StyledDivLinksInner>
      </StyledNavSectionLinks>

      <StyledNavbarSectionFooter>
        <UserButton
          image="https://www.educlub.com.br/wp-content/uploads/2020/10/letra-jota.jpg"
          name="João Marques"
          email="jmarquesm@live.com"
        />
      </StyledNavbarSectionFooter>
    </StyledNavbarMain>
  );
}
