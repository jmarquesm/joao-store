// vendors
import styled from "@emotion/styled";
import {
  createPolymorphicComponent,
  Box,
  Button as MantineButton,
  Card,
  CardProps,
  CardSectionProps,
  Image as MantineImage,
  ImageProps as MantineImageProps,
  BoxProps,
  ButtonProps,
} from "@mantine/core";
import { transientConfig } from "../../utils/emotion";

export const Container = createPolymorphicComponent<'div', CardProps>(styled(Card)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white)};
`);

export const ImageCard = createPolymorphicComponent<'div', CardSectionProps>(styled(Card.Section)`
  display: flex;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  cursor: pointer;
`);

interface ImageProps extends MantineImageProps{
  $isInCarousel: boolean
}

export const Image = createPolymorphicComponent<'img', ImageProps>(styled(MantineImage, transientConfig)<ImageProps>`
  padding: ${({$isInCarousel}) => ($isInCarousel ? "50px" : "0")};
  margin: ${({$isInCarousel}) => ($isInCarousel ? '' : "4rem")};
  
  @media (min-width: 768px){
    margin: 0;
  }
`);

export const Title = createPolymorphicComponent<'div', CardSectionProps>(styled(Card.Section)`
  height: 70px;
  align-items: baseline;
  padding-left: 16px;
  padding-right: 16px;
`);

export const Price = createPolymorphicComponent<'div', CardSectionProps>(styled(Card.Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  padding-bottom: 0;
`);

export const PriceBox = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`);

export const ButtonBox = createPolymorphicComponent<'div', BoxProps>(styled(Box)`
  margin-top: 16px;
  padding: 0;
`);

export const Button = createPolymorphicComponent<'button', ButtonProps>(styled(MantineButton)`
  margin-left: auto;
  width: -webkit-fill-available;
`);
