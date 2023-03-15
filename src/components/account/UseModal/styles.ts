// vendors
import styled from "@emotion/styled";
import { createPolymorphicComponent, Group, GroupProps } from "@mantine/core";

export const GroupLink = createPolymorphicComponent<'div', GroupProps>(styled(Group)`
  cursor: pointer;
  display: block;
  line-height: 1;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.sm}px;
  text-decoration: none;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7])};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]};
  }
`);
