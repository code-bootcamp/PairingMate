import { Inner } from "../../../../../commons/styles/common";
import { IFAQProps } from "./FAQ.User.types";
import * as F from "./FAQ.User.styles";

const FAQUserUI = (props: IFAQProps) => {
  return (
    <>
      <Inner>
        <F.Title>자주 묻는 질문</F.Title>
        <F.AccodianList className="accodian">
          {props.faqResultData?.map((el, index) => (
            <li key={index} onClick={props.onClickToggleAccodian}>
              <F.Arrow />
              <h3>{el.title}</h3>
              <div>{el.contents}</div>
            </li>
          ))}
        </F.AccodianList>
      </Inner>
    </>
  );
};

export default FAQUserUI;
