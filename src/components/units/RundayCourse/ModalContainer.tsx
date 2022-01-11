import {
  replaceCourseImage,
  replaceSubway,
} from "../../../commons/libraries/utils/utils";
import * as S from "./ModalStyles";

interface Props {
  pointData: any[];
  onClickClose: () => void;
}

const ModalUI = (props: Props) => {
  return (
    <S.ModalWrapper>
      <S.CloseIcon
        src="/images/sub/runday-course/close-icon.png"
        alt=""
        onClick={props.onClickClose}
      />
      <div>
        <img src={replaceCourseImage(props.pointData[0]?.AREA_GU)} alt="" />
      </div>
      <nav>
        <h3>{props.pointData[0]?.COURSE_NAME}</h3>
        <span>{props.pointData[0]?.CPI_NAME}</span>
        <p>{props.pointData[0]?.CONTENT}</p>
        <span>{props.pointData[0]?.DETAIL_COURSE}</span>
        <ul>
          <li>
            <S.InfoText>{props.pointData[0]?.DISTANCE}</S.InfoText>
          </li>
          <li>
            <S.InfoText>{props.pointData[0]?.LEAD_TIME}</S.InfoText>
          </li>
          <li>
            {replaceSubway(props.pointData[0]?.RELATE_SUBWAY || "").map(
              (el) => el.length !== 0 && <S.InfoTag key={el}>{el}</S.InfoTag>
            )}
          </li>
        </ul>
      </nav>
    </S.ModalWrapper>
  );
};

export default ModalUI;
