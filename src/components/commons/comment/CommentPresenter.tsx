import { replaceUrl } from "../../../commons/libraries/utils/utils";
import * as C from "./CommentStyles";

const CommentsUI = (props: any) => {
  return (
    <>
      <C.Wrapper>
        <C.CreateWrapper>
          <img src={replaceUrl(props.userImage)} />
          <textarea
            placeholder="이용후기를 적어주세요"
            onChange={props.onChangeContent}
          ></textarea>
          <button onClick={props.onClickAddComment}>등록</button>
        </C.CreateWrapper>
        <C.ContentsWrapper>
          <C.ContentsHeader>
            <img />
            <C.NameDateWrapper>
              <span>이름</span>
              <span>작성일</span>
            </C.NameDateWrapper>
          </C.ContentsHeader>
          <C.ContentsBody>
            <pre>개멍청이</pre>
          </C.ContentsBody>
        </C.ContentsWrapper>
      </C.Wrapper>
    </>
  );
};
export default CommentsUI;
