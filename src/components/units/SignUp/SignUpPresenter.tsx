import * as S from "./SignUpStyles";

const SignUpUI = () => {

    return (
        <S.SignUpWrapper>
            <S.SignUpWrap>
                <S.SignUpHeadTitle>당신은<br />어떤
                <strong> Mate </strong> 이신가요?
                </S.SignUpHeadTitle>

                <S.SignUpBodyTitle>원하는 회원가입 유형을 선택해주세요</S.SignUpBodyTitle>

                <S.SignUpRadioWrapper>
                    <S.SignUpFooterTitle>Mate를 찾고 싶어요</S.SignUpFooterTitle>
                    <S.SignUpRadio type="radio" name="SignupType" checked /> 일반회원으로 회원가입

                    <S.SignUpFooterTitle>PairingMate와 Mate가 되고 싶어요</S.SignUpFooterTitle>
                    <S.SignUpRadio type="radio" name="SignupType" /> 기업회원으로 회원가입
                </S.SignUpRadioWrapper>
            </S.SignUpWrap>
        </S.SignUpWrapper>
    )
}
export default SignUpUI;