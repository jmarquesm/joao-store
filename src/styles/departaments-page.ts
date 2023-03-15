// vendors
import styled from "@emotion/styled";
import { Container, ContainerProps, createPolymorphicComponent } from "@mantine/core";
import { css } from "@emotion/react";
import { transientConfig } from "../utils/emotion";

interface ImageProps extends ContainerProps{
  $loading: boolean
}

export const LoadingContainer = createPolymorphicComponent<'div', ImageProps>(styled(Container, transientConfig)<ImageProps>`
  min-height: calc(100vh - 133px);
  ${(props) =>
    props.$loading &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`);
