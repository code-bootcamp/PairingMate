import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const AdminContentsWrap = styled.section`
  width: 85%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f7f7f7;

  h2 {
    font-weight: bold;
  }
`;

export const UserTableWrap = styled.div`
  width: 100%;
  padding: 30px 0;
  table {
    width: 100%;

    th,
    td {
      padding: 10px 15px;
      text-align: center;
    }

    th {
      background-color: #eee;
      border-style: solid;
      border-color: #ebebeb;
      border-width: 1px 0px 1px 1px;

      &:last-child {
        border-right: 1px solid #ebebeb;
      }
    }
    td {
      border-style: solid;
      border-color: #ebebeb;
      border-width: 1px 0px 1px 1px;

      &:last-child {
        border-right: 1px solid #ebebeb;
      }
    }
  }
`;
