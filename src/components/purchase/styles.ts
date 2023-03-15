// vendors
import styled from "@emotion/styled";
import { createPolymorphicComponent, Grid, Box, Button, ButtonProps, ColProps, BoxProps } from "@mantine/core";

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ClearCartButton = createPolymorphicComponent<'button', ButtonProps>(styled(Button)`
  width: 293px;
  margin-left: 15px;
`);

export const GlobalCol = createPolymorphicComponent<'div', ColProps>(styled(Grid.Col)`
  border-radius: 10;
  padding: 0;
  margin: auto;
  margin-top: 0;
`);

export const ProductsDescription = createPolymorphicComponent<'div', ColProps>(styled(Grid)`
  margin: 0;
`);

export const ElementCol = createPolymorphicComponent<'div', ColProps>(styled(Grid.Col)`
  display: flex;
  align-content: center;
  margin: auto;
  font-size: 13px;
`);

export const Units = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  display: flex;
  align-items: center;
`);

export const RemoveItemGrid = createPolymorphicComponent<'div', ColProps>(styled(Grid.Col)`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`);

export const GlobalCol2 = createPolymorphicComponent<'div', ColProps>(styled(Grid.Col)`
  margin-top: 14.9px;
  padding-top: 0;
  position: sticky;
  top: 20px;
  height: 300px;
`);

export const Value = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  border-radius: 5;
  padding: 5px;
  margin: auto;
  min-width: 200px;
  align-content: center;
  font-size: 13px;
`);

export const ValueCalc = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
`);

export const Discount = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
`);

export const TotalPrice = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
  height: 50px;
  align-items: center;
`);

export const Fee = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
  height: 50px;
  align-items: center;
`);

export const ButtonBox = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`);
