// vendors
import styled from "@emotion/styled";
import { ContainerProps } from "@mantine/core/lib/Container";
import {createPolymorphicComponent} from "@mantine/core";

export const Container = createPolymorphicComponent<'div', ContainerProps>(styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 3rem;
  min-height: calc(100vh - 147.7px);
  margin-top: 4rem;
  

  @media (min-width: 768px){
    min-height: calc(100vh - 133px);
    padding: 2rem 0;
  }
`)