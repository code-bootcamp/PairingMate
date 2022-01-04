import styled from "@emotion/styled";
import theme from "./variables";

export const Inner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px;

  @media all and ${theme.laptop} {
    padding: 50px 20px;
  }
`;
export const FullpageSection = styled.section`
  width: 100%;
  height: 100%;
`;
