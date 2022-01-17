import {
  getDate,
  priceToString,
} from "../../../../commons/libraries/utils/utils";
import { Inner } from "../../../../commons/styles/common";
import AdminNavigation from "../../../commons/layout/navigation/admin/AdminNavigation.container";
import * as AS from "./AdminSales.styles";
import { IAdminSalesProps } from "./AdminSales.types";
const AdminSalesUI = (props: IAdminSalesProps) => {
  return (
    <>
      <AS.Wrapper>
        <AdminNavigation />
        <AS.AdminContentsWrap>
          <Inner>
            <AS.SalesSection>
              <AS.SectionTitle>전체 매출관리</AS.SectionTitle>
              <AS.SalseTableWrap>
                <table>
                  <thead>
                    <tr>
                      <th>업체명</th>
                      <th>판매금액</th>
                      <th>판매일</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.buylist.map((el, index) => (
                      <tr key={index}>
                        <td>{el.productName}</td>
                        <td>{priceToString(el.price)}원</td>
                        <td>{getDate(new Date(el.buyAt.seconds * 1000))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </AS.SalseTableWrap>
            </AS.SalesSection>
          </Inner>
        </AS.AdminContentsWrap>
      </AS.Wrapper>
    </>
  );
};

export default AdminSalesUI;
