import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const TabTitleList = styled.ul`
  display: flex;
  margin-top: 90px;
`;

export const TabTitle = styled.li<{ isActive: boolean }>`
  flex: 1;
  height: 50px;
  text-align: center;
  background-color: ${(props) => (!props.isActive ? "#eee" : "#fff")};
  border-color: #ddd;
  border-style: solid;
  border-width: ${(props) =>
    !props.isActive ? " 1px 0px 1px 1px" : "1px 0px 0px 1px"};
  font-size: ${theme.fontsize.fs18};
  line-height: 30px;

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
