// vendors
import styled from "@emotion/styled";
import { 
  Title as MantineTitle,
  TitleProps, 
  Text as MantineText, 
  TextProps, 
  createPolymorphicComponent 
} from "@mantine/core";

export const Container = styled.div`
  margin: auto;
`

export const Div404 = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: 220px;
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.xl * 1.5}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2])};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 120px;
  }
`;

export const Title = createPolymorphicComponent<'h1', TitleProps>(styled(MantineTitle)`
  font-family: Greycliff CF ${(p) => p.theme.fontFamily};
  text-align: center;
  font-weight: 900;
  font-size: 38px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 32px;
  }
`);

export const Text = createPolymorphicComponent<'text', TextProps>(styled(MantineText)`
  max-width: 500px;
  margin: auto;
  margin-top: ${(p) => p.theme.spacing.xl}px;
  margin-bottom: ${(p) => p.theme.spacing.xl * 1.5}px;
  justify-content: center;
`);