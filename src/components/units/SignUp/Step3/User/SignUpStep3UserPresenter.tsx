import * as S from './SignUpStep3UserStyles'
import { SignUpStep3UserUIProps } from "./SignUpStep3UserTypes";
import TagsAdd from "../../../../commons/tags/add/TagsAddContainer";

const SignUpStep3UserUI = (props: SignUpStep3UserUIProps) => {
    return (
        <S.SignupWrapper>
            <S.SignupWrap>
                <S.SignupHeadTitle>PairingMate에서<br />
                <strong>당신의 Best Mate 를 만나보세요</strong>
                </S.SignupHeadTitle>
                <S.SignupProfileWrapper>
                    <S.SignupImgWrapper onClick={props.onClickProfileImage}>
                        <img src={`https://storage.googleapis.com/${props.profileImage[0]}`} onError={props.onErrorHandle}/>
                        <input type="file" ref={props.fileRef} onChange={props.onChangeFile} />
                    </S.SignupImgWrapper>
                    <h4>프로필 사진을 등록해주세요</h4>
                </S.SignupProfileWrapper>
                <S.SignupDisplayName type="text" placeholder="닉네임을 입력해주세요." onChange={props.onChangeName}/>
                <S.SignupTagsWrapper>
                    <h4>👀 &nbsp; 관심사 체크하기</h4>
                    <TagsAdd tags={props.Tags} setTags={props.setTags} />
                </S.SignupTagsWrapper>
                <button onClick={props.onClickUpdateDoc}> 등록하기 </button>
            </S.SignupWrap>
        </S.SignupWrapper>
    )
}
export default SignUpStep3UserUI;