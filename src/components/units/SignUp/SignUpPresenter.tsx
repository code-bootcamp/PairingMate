import * as S from "./SignUpStyles";
import { SignUpUIProps } from "./SignUpTypes";


const SignUpUI = (props: SignUpUIProps) => {

    return (
        <S.SignUpWrapper>
            <S.SignUpWrap>
                <S.SignUpHeadTitle>당신은<br />어떤
                <strong> Mate </strong> 이신가요?
                </S.SignUpHeadTitle>
                <S.SignUpBodyTitle>원하는 회원가입 유형을 선택해주세요</S.SignUpBodyTitle>
                <S.SignUpButtonWrapper>
                    <div>
                        <S.SignUpFooterTitle>Mate를 찾고 싶어요</S.SignUpFooterTitle>
                        <S.SignUpButton onClick={props.onClickSignupUser}> 일반회원으로 회원가입 </S.SignUpButton>
                    </div>
                    <div>
                        <S.SignUpFooterTitle>PairingMate와 Mate가 되고 싶어요</S.SignUpFooterTitle>
                        <S.SignUpButton onClick={props.onClickSignupCompany}> 기업회원으로 회원가입 </S.SignUpButton>
                    </div>
                </S.SignUpButtonWrapper>
            </S.SignUpWrap>
        </S.SignUpWrapper>
    )
}
export default SignUpUI;