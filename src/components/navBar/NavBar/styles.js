// vendors
import styled from "@emotion/styled";
import { Code, Navbar } from "@mantine/core";

export const Main = styled(Navbar)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
  width: 95vw;
  height: 92.3vh;
  @media screen and (min-width: 768px) {
    height: 600px;
    width: 300px;
  }
`;

export const Header = styled(Navbar.Section)`
  padding: ${(p) => p.theme.spacing.md}px;
  padding-top: 0;
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

export const CodeLogo = styled(Code)`
  font-weight: 700;
`;

export const Links = styled(Navbar.Section)`
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
`;

export const LinksInner = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xl}px;
  padding-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const Footer = styled(Navbar.Section)`
  margin-left: ${({ theme }) => -theme.spacing.md}px;
  margin-right: ${({ theme }) => -theme.spacing.md}px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;
