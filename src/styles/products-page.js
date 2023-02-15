// vendors
import styled from "@emotion/styled";
import { Box, Grid, Text } from "@mantine/core";

export const LoaderPage = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
`;

export const ImagesGrid = styled(Grid.Col)`
  margin: 0;
  padding: 0;
`;

export const ImagesBox = styled(Box)`
  border: 1px solid #dee2e6;
  margin: 20px;
  border-radius: 3%;
  padding: 1px;
  max-height: 800;
`;

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

export const ProductDescription = styled(Box)`
  font-size: 1.8rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 500;
  font-family: Roboto, Verdana;
  padding: 15px;
`;

export const Inventory = styled(Box)`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
`;

export const InventoryText = styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

export const CashPayment = styled(Box)`
  padding: 15px;
  font-size: 1.2rem;
`;

export const CashPaymentText = styled(Text)`
  font-size: 1.7rem;
  font-weight: bolder;
`;

export const CardPayment = styled(Box)`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
  font-size: 1.2rem;
`;

export const CardPaymentText = styled(Text)`
  font-size: 1.7rem;
  font-weight: bolder;
`;

export const Button = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 10px 20px;
`;