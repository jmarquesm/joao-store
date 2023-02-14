// vendors
import styled from "@emotion/styled";
import { Box, UnstyledButton } from "@mantine/core";

export const ButtonControl = styled(UnstyledButton)`
  font-weight: 500;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black)};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;

  &:hover {
    background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]};
    color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  }
`;

export const Links = styled.a`
  cursor: pointer;
  font-weight: 500;
  display: block;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.md}px;
  padding-left: 31px;
  margin-left: 30px;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7])};
  border-left: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};

  &:hover {
    background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]};
    color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  }
`;

export const ThemeIcon = styled(Box)`
  display: flex;
  align-items: center;
`;

export const LinkGroup = styled(Box)`
  min-height: 220px;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
`;