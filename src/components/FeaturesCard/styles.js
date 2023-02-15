// vendors
import styled from "@emotion/styled";
import { Box, Button as MantineButton, Card, Image } from "@mantine/core";

export const Container = styled(Card)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white)};
`;

export const ImageCard = styled(Card.Section)`
  display: flex;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  cursor: pointer;
`;

export const StyledImage = styled(Image)`
  padding: ${({ isInCarousel }) => (isInCarousel ? "50px" : "0")};
`;

export const Title = styled(Card.Section)`
  height: 70px;
  align-items: baseline;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Price = styled(Card.Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  padding-bottom: 0;
`;

export const PriceBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`;

export const ButtonBox = styled(Box)`
  margin-top: 16px;
  padding: 0;
`;

export const Button = styled(MantineButton)`
  margin-left: auto;
  width: -webkit-fill-available;
`;
