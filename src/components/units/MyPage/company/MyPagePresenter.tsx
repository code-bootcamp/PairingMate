import { Inner } from "../../../../commons/styles/common";
import * as M from "./MyPageStyles";
import { IMypageProps } from "./MyPageTypes";
import Tabs from "../../../commons/tabs/Tabs";
import Tab from "../../../commons/tabs/Tabs.Contents";
import {
  getCategory,
  getDate,
  getTitle,
  priceToString,
} from "../../../../commons/libraries/utils/utils";

const MyPageUI = (props: IMypageProps) => {
  return (
    <>
      <Inner style={{ paddingBottom: 0 }}>
        <M.MypageSection>
          <M.MyPageUserInfo>
            <M.UserInfoHeader>
              <M.UserProfileWrap>
                <M.UserProfileImg onClick={props.onClickProfileImage}>
                  <img src="/images/common/logo.png" alt="" />
                </M.UserProfileImg>
              </M.UserProfileWrap>
              <figcaption>
                <M.UserName>
                  {props.companyUserInfo?.fetchUserLoggedIn.name}
                </M.UserName>
              </figcaption>
            </M.UserInfoHeader>
          </M.MyPageUserInfo>
          <M.MyPageArticle>
            <div>
              <Tabs>
                <Tab title="전체">
                  <M.MypageContents>
                    <h3>내가 쓴 게시글</h3>
                    <M.MypageFindMatesPostWrap>
                      <ul>
                        {props.data?.fetchUseditems.map((el) => (
                          <li key={el._id}>
                            <span>{getCategory(el.name)}</span>
                            {getTitle(el.name)}
                          </li>
                        ))}
                      </ul>
                    </M.MypageFindMatesPostWrap>

                    <h3>결제 내역</h3>
                    <M.MypageTableWrap>
                      <M.MypageTable>
                        <colgroup>
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>판매자</th>
                            <th>결제품목</th>
                            <th>결제금액</th>
                            <th>결제일</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.buylist.map((el, index) => (
                            <tr key={index}>
                              <td>{el.seller.name}</td>
                              <td>{el.productName}</td>
                              <td>{priceToString(el.price)}</td>
                              <td>
                                {getDate(new Date(el.buyAt.seconds * 1000))}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </M.MypageTable>
                    </M.MypageTableWrap>
                  </M.MypageContents>
                </Tab>
                <Tab title="내가 쓴 글">
                  <M.MypageContents>
                    <h3>내가 쓴 게시글</h3>
                    <M.MypageFindMatesPostWrap>
                      <ul>
                        {props.data?.fetchUseditems.map((el) => (
                          <li key={el._id}>
                            <span>{getCategory(el.name)}</span>
                            {getTitle(el.name)}
                          </li>
                        ))}
                      </ul>
                    </M.MypageFindMatesPostWrap>
                  </M.MypageContents>
                </Tab>
                <Tab title="결제내역">
                  <M.MypageContents>
                    <h3>결제 내역</h3>
                    <M.MypageTableWrap>
                      <M.MypageTable>
                        <colgroup>
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>판매자</th>
                            <th>결제품목</th>
                            <th>결제금액</th>
                            <th>결제일</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.buylist.map((el, index) => (
                            <tr key={index}>
                              <td>{el.seller.name}</td>
                              <td>{el.productName}</td>
                              <td>{priceToString(el.price)}</td>
                              <td>
                                {getDate(new Date(el.buyAt.seconds * 1000))}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </M.MypageTable>
                    </M.MypageTableWrap>
                  </M.MypageContents>
                </Tab>
              </Tabs>
            </div>
          </M.MyPageArticle>
        </M.MypageSection>
      </Inner>
    </>
  );
};
export default MyPageUI;
