// vendors
import styled from "@emotion/styled";
import { Container as MantineContainer, Text } from "@mantine/core";

export const Container = styled.div`
  margin: auto;
`

export const CartIsEmpty = styled(MantineContainer)`
  display: flex;
  justify-content: center;
`;

export const TextCartIsEmpty = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  color: #49505757;
  
  @media (min-width: 768px){
    font-size: 50px;
  }
`;