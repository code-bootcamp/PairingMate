import * as S from "./SignUpStep2UserStyles";
import { SignUpStep2UserUIProps } from "./SignUpStep2UserTypes";


const SignUpStep2UserUI = (props: SignUpStep2UserUIProps) => {

    return (
        <S.SignUpWrapper>
            <S.SignUpWrap>
                <S.SignUpHeadTitle>PairingMate에서<br />
                <strong> 당신의 Best Mate를 만나보세요 </strong>
                </S.SignUpHeadTitle>
                <S.SignUpBodyTitle>원하는 회원가입 유형을 선택해주세요</S.SignUpBodyTitle>
                <S.SignUpButtonWrapper>
                    <div>
                        <S.SignUpFooterTitle>Mate를 찾고 싶어요</S.SignUpFooterTitle>
                        <S.SignUpButton> 일반회원으로 회원가입 </S.SignUpButton>
                    </div>
                    <div>
                        <S.SignUpFooterTitle>PairingMate와 Mate가 되고 싶어요</S.SignUpFooterTitle>
                        <S.SignUpButton> 기업회원으로 회원가입 </S.SignUpButton>
                    </div>
                </S.SignUpButtonWrapper>
            </S.SignUpWrap>
        </S.SignUpWrapper>
    )
}
export default SignUpStep2UserUI;