// vendors
import styled from "@emotion/styled";
import { Group, Container as MantineContainer } from "@mantine/core";

export const Footer = styled.footer`
  margin-top: auto;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2])};
`;

export const Container = styled(MantineContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xs}px;
  padding-bottom: ${({ theme }) => theme.spacing.xs}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: column;
  }
`;

export const GroupLinks = styled(Group)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-top: ${({ theme }) => theme.spacing.md}px;
  }
`;
