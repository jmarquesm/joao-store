// vendors
import styled from "@emotion/styled";
import { UnstyledButton } from "@mantine/core";

export const ButtonUser = styled(UnstyledButton)`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black)};
  height: 60px;

  &:hover {
    background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]};
  }
`;