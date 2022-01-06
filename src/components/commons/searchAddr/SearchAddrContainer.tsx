import Head from "next/head";
import { useState, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import * as S from "../../units/FindMates/add/FindMatesAddStyles";

declare const window: Window &
  typeof globalThis & {
    daum: any;
  };

interface SearchAddrProps {
  data: Pick<IQuery, "fetchBoard">;
  setBoardAddress: Dispatch<
    SetStateAction<{
      zipcode: string;
      address: string;
      addressDetail?: string;
    }>
  >;
}

const SearchAddr = (props: SearchAddrProps) => {
  const [addr, setAddr] = useState("");

  const onClickSearchAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        let addr = ""; // 주소 변수
        let extraAddr = ""; // 참고항목 변수

        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
        }
        setAddr(addr);
        props.setBoardAddress({
          zipcode: data.zonecode,
          address: addr,
        });
      },
    }).open();
  };
  return (
    <>
      <Head>
        <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      </Head>
      <S.FindmatesSearchWrapper>
        <img src="/images/common/location-black.png" alt="" />
        <button onClick={onClickSearchAddr}>장소</button>
        <input
          type="text"
          placeholder={props.data?.fetchBoard.boardAddress?.address}
          value={addr}
          readOnly
        />
      </S.FindmatesSearchWrapper>
    </>
  );
};

export default SearchAddr;
