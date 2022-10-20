import styled from "@emotion/styled";
import { Container, Group, ActionIcon, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

const S = {};

S.Footer = styled.footer`
  margin-top: auto;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2])};
`;

S.Container = styled(Container)`
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

S.GroupLinks = styled(Group)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-top: ${({ theme }) => theme.spacing.md}px;
  }
`;

export function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.GroupLinks spacing={0} position="right">
          <ActionIcon component="a" target="_blank" href="https://www.linkedin.com/in/jmarquesm/" size="lg">
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon component="a" target="_blank" href="https://github.com/jmarquesm" size="lg">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </S.GroupLinks>
        <Text size={12}>Desenvolvido por João Marques</Text>
      </S.Container>
    </S.Footer>
  );
}
