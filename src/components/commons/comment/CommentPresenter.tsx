import { Rate } from "antd";
import { getDate, replaceUrl } from "../../../commons/libraries/utils/utils";
import * as C from "./CommentStyles";

const CommentsUI = (props: any) => {
  // console.log(props.value);
  return (
    <>
      <C.Wrapper>
        <C.CreateWrapper>
          <textarea
            placeholder="이용후기를 적어주세요"
            onChange={props.onChangeContent}
          ></textarea>
          <button onClick={props.onClickAddComment}>등록</button>
        </C.CreateWrapper>
        {props.value.map((el, index) => (
          <C.ContentsWrapper key={index}>
            <img src={replaceUrl(el.writer.image)} />
            <C.ContentsHeader>
              <C.NameDateWrapper>
                <C.Name>{el.writer.name}</C.Name>
                <C.Date>{getDate(props.seconds)}</C.Date>
              </C.NameDateWrapper>
              <C.ContentsBody>
                <pre>{el.content}</pre>
              </C.ContentsBody>
            </C.ContentsHeader>
          </C.ContentsWrapper>
        ))}
      </C.Wrapper>
    </>
  );
};
export default CommentsUI;
