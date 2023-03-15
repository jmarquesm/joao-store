// vendors
import { Group, ScrollArea } from "@mantine/core";

// components
import { UserButton } from "../userButton/userButton";
import { LinksGroup } from "../navBarLinkGroup/navBarLinkGroup";

// icons
import { IconKeyboard, IconSection, IconArmchair, IconHome } from "@tabler/icons";

// typings
import { MenuItem } from "../../../typings/menuItems";

// styles
import * as S from "./styles";

const menuMock:MenuItem[] = [
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
];

export function NavBar() {
  const links = menuMock.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <S.Main p="md" pb={0}>
      <S.Header>
        <Group position="apart">
          <S.CodeLogo>JOÃO STORE</S.CodeLogo>
        </Group>
      </S.Header>

      <S.Links grow component={ScrollArea}>
        <S.LinksInner>{links}</S.LinksInner>
      </S.Links>

      <S.Footer>
        <UserButton
          icon=''
          image="https://www.educlub.com.br/wp-content/uploads/2020/10/letra-jota.jpg"
          name="João Marques"
          email="jmarquesm@live.com"
        />
      </S.Footer>
    </S.Main>
  );
}
