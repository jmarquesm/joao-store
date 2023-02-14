import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 3rem;
  min-height: calc(100vh - 133px);

  @media (min-width: 768px){
    padding: 2rem 0;
  }
`