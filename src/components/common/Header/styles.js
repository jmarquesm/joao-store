// vendors
import styled from "@emotion/styled";
import { Group, Header as MantineHeader } from "@mantine/core";

export const Link = styled.a`
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

export const Header = styled(MantineHeader)`
  padding-left: ${({ theme }) => theme.spacing.md}px;
  padding-right: ${({ theme }) => theme.spacing.md}px;
`;

export const Nav = styled.nav`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1px;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const GroupLinks = styled(Group)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;