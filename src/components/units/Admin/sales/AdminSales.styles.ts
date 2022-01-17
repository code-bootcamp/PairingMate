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
`;

export const SalesSection = styled.section`
  padding: 30px 0;
`;
export const SectionTitle = styled.h2`
  font-weight: bold;
`;

export const SalseTableWrap = styled.div`
  padding-top: ${theme.PaddingTop.pt30};
  table {
    width: 100%;

    thead {
      tr {
        th {
          padding: 10px;
          background-color: #ddd;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 10px;
          border: 1px solid #ebebeb;
          text-align: center;
        }
      }
    }
  }
`;
