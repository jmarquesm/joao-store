// vendors
import styled from "@emotion/styled";
import { Grid, Box, Button } from "@mantine/core";

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ClearCartButton = styled(Button)`
  width: 293px;
  margin-left: 15px;
`;

export const GlobalCol = styled(Grid.Col)`
  border-radius: 10;
  padding: 0;
  margin: auto;
  margin-top: 0;
`;

export const ProductsDescription = styled(Grid)`
  margin: 0;
`;

export const ElementCol = styled(Grid.Col)`
  display: flex;
  align-content: center;
  margin: auto;
  font-size: 13px;
`;

export const Units = styled(Box)`
  display: flex;
  align-items: center;
`;

export const RemoveItemGrid = styled(Grid.Col)`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const GlobalCol2 = styled(Grid.Col)`
  margin-top: 14.9px;
  padding-top: 0;
  position: sticky;
  top: 20px;
  height: 300px;
`;

export const Value = styled(Box)`
  border-radius: 5;
  padding: 5px;
  margin: auto;
  min-width: 200px;
  align-content: center;
  font-size: 13px;
`;

export const ValueCalc = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
`;

export const Discount = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
`;

export const TotalPrice = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
  height: 50px;
  align-items: center;
`;

export const Fee = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
  height: 50px;
  align-items: center;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
