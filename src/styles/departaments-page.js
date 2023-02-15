// vendors
import styled from "@emotion/styled";
import { Container } from "@mantine/core";
import { css } from "@emotion/react";


export const LoadingContainer = styled(Container)`
min-height: calc(100vh - 133px);
  ${(props) =>
    props.loading &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
