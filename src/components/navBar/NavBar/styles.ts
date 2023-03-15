/* eslint-disable @typescript-eslint/no-explicit-any */
// vendors
import styled from "@emotion/styled";
import { Code, CodeProps, createPolymorphicComponent, Navbar, NavbarProps } from "@mantine/core";
import { SectionProps } from "@mantine/core/lib/AppShell/HorizontalSection/Section/Section";

export const Main = createPolymorphicComponent<"div", NavbarProps>(styled(Navbar)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
  width: 95vw;
  height: 92.3vh;
  @media screen and (min-width: 768px) {
    height: calc(100vh - 56px);
    position: fixed;
    width: 300px;
  }
`);

export const Header = createPolymorphicComponent<"div", SectionProps>(styled(
  Navbar.Section as any
)<SectionProps>`
  padding: ${(p) => p.theme.spacing.md}px;
  padding-top: 0;
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`);

export const CodeLogo = createPolymorphicComponent<"div", CodeProps>(styled(Code)`
  font-weight: 700;
`);

export const Links = createPolymorphicComponent<"img", SectionProps>(styled(
  Navbar.Section as any
)<SectionProps>`
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
`);

export const LinksInner = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xl}px;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const Footer = createPolymorphicComponent<"div", SectionProps>(styled(
  Navbar.Section as any
)<SectionProps>`
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`);
