import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const TabTitleList = styled.ul`
  display: flex;
`;

export const TabTitle = styled.li<{ isActive: boolean }>`
  flex: 1;
  text-align: center;
  background-color: ${(props) => (!props.isActive ? "#eee" : "#fff")};
  border-color: #ddd;
  border-style: solid;
  border-width: 1px 0px 1px 1px;

  &:last-child {
    border-right: 1px solid #ddd;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px 15px;
    color: ${(props) => (!props.isActive ? "#333" : "#213358")};
    font-weight: ${(props) => (!props.isActive ? "400" : "700")};
  }
`;
