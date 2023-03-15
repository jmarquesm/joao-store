// vendors
import styled from "@emotion/styled";
import { Container as MantineContainer, ContainerProps, Text, TextProps, createPolymorphicComponent } from "@mantine/core";

export const Container = styled.div`
  margin: auto;
`

export const CartIsEmpty = createPolymorphicComponent<'div', ContainerProps>(styled(MantineContainer)`
  display: flex;
  justify-content: center;
`);

export const TextCartIsEmpty = createPolymorphicComponent<'text', TextProps>(styled(Text)`
  font-size: 30px;
  font-weight: 600;
  color: #49505757;
  
  @media (min-width: 768px){
    font-size: 50px;
  }
`);