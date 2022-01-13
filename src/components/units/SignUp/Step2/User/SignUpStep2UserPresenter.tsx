import * as S from "./SignUpStep2UserStyles";
import { SignUpStep2UserUIProps } from "./SignUpStep2UserTypes";


const SignUpStep2UserUI = (props: SignUpStep2UserUIProps) => {

    return (
        <S.SignUpWrapper>
            <S.SignUpWrap>
                <S.SignUpHeadTitle> PairingMate 에서 <br />
                당신의 <strong>Best Mate</strong>를 만나보세요!
                </S.SignUpHeadTitle>
                <S.SignUpInfoWrapper>
                    <S.SignUpInfoWrap>
                        <S.SignUpInfoTitle>이메일<label>*</label></S.SignUpInfoTitle>
                        <S.SignUpInputWrap>
                            <S.SignUpInput type="text" name="email" placeholder="이메일을 입력해주세요" onChange={props.onChangeInputs}/>
                        </S.SignUpInputWrap>
                    </S.SignUpInfoWrap>
                    <S.SignUpInfoWrap>
                        <S.SignUpInfoTitle>비밀번호<label>*</label></S.SignUpInfoTitle>
                        <S.SignUpInputWrap>
                            <S.SignUpInput type="password" name="password" placeholder="비밀번호를 입력해주세요" onChange={props.onChangeInputs}/>
                        </S.SignUpInputWrap>
                    </S.SignUpInfoWrap>
                    <S.SignUpInfoWrap>
                        <S.SignUpInfoTitle>비밀번호 확인<label>*</label></S.SignUpInfoTitle>
                        <S.SignUpInputWrap>
                            <S.SignUpInput type="password" name="passwordChk" placeholder="비밀번호를 재입력해주세요" onChange={props.onChangePasswordChk}/>
                        </S.SignUpInputWrap>
                    </S.SignUpInfoWrap>
                    <S.SignUpButton onClick={props.onClickSignUp}> 회원가입 </S.SignUpButton>
                </S.SignUpInfoWrapper>
            </S.SignUpWrap>
        </S.SignUpWrapper>
    )
}
export default SignUpStep2UserUI;