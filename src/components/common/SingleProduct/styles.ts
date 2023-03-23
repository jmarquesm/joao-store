// vendors
import styled from "@emotion/styled";
import { createPolymorphicComponent, Box, BoxProps, Grid, Text, TextProps } from "@mantine/core";

export const ImagesGrid = styled(Grid.Col)`
  margin: 0;
  padding: 0;
`;

export const ImagesBox = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  border: 1px solid #dee2e6;
  margin: 20px;
  border-radius: 3%;
  padding: 1px;
  max-height: 800;
`);

export const MainImageGrid = styled(Grid.Col)`
  border: 1px solid #dee2e6;
  margin: 20px;
  margin-left: 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;

export const InformationGrid = styled(Grid.Col)`
  border: 1px solid #dee2e6;
  margin: 20px;
  margin-left: 0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;

export const ProductDescription = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  font-size: 1.8rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 500;
  font-family: Roboto, Verdana;
  padding: 15px;
`);

export const Inventory = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
`);

export const InventoryText = createPolymorphicComponent<"text", TextProps>(styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
`);

export const CashPayment = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  padding: 15px;
  font-size: 1.2rem;
`);

export const CashPaymentText = createPolymorphicComponent<"text", TextProps>(styled(Text)`
  font-size: 1.7rem;
  font-weight: bolder;
`);

export const CardPayment = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
  font-size: 1.2rem;
`);

export const CardPaymentText = createPolymorphicComponent<"text", TextProps>(styled(Text)`
  font-size: 1.7rem;
  font-weight: bolder;
`);

export const Button = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 10px 20px;
`);
