import * as S from "./SignUpStep2CompanyStyles";
import { SignUpStep2CompanyUIProps } from "./SignUpStep2CompanyTypes";


const SignUpStep2CompanyUI = (props: SignUpStep2CompanyUIProps) => {

    return (
        <S.SignUpWrapper>
            <S.SignUpWrap>
                <S.SignUpHeadTitle>안녕하세요 Mate님! <br />
                <strong> 함께 해주셔서 감사합니다! </strong>
                </S.SignUpHeadTitle>
                <S.SignUpInfoWrapper>
                    <S.SignUpInfoWrap>
                        <S.SignUpInfoTitle>이메일<label>*</label></S.SignUpInfoTitle>
                        <S.SignUpEmailWrapper>
                            <S.SignUpInput type="text" placeholder="이메일을 입력해주세요" />
                            <S.EmailChkButton>중복확인</S.EmailChkButton>
                        </S.SignUpEmailWrapper>
                    </S.SignUpInfoWrap>
                        
                    <S.SignUpInfoWrap>
                        <S.SignUpInfoTitle>회사명<label>*</label></S.SignUpInfoTitle>
                        <S.SignUpEmailWrapper>
                            <S.SignUpInput type="text" placeholder="회사명을 입력해주세요" />
                        </S.SignUpEmailWrapper>
                    </S.SignUpInfoWrap>

                    <S.SignUpInfoWrap>
                        <S.SignUpInfoTitle>비밀번호<label>*</label></S.SignUpInfoTitle>
                        <S.SignUpEmailWrapper>
                            <S.SignUpInput type="password" placeholder="비밀번호를 입력해주세요" />
                        </S.SignUpEmailWrapper>
                    </S.SignUpInfoWrap>
                    
                    <S.SignUpInfoWrap>
                        <S.SignUpInfoTitle>비밀번호 확인<label>*</label></S.SignUpInfoTitle>
                        <S.SignUpEmailWrapper>
                            <S.SignUpInput type="password" placeholder="비밀번호를 재입력해주세요" />
                        </S.SignUpEmailWrapper>
                    </S.SignUpInfoWrap>
                    <S.SignUpButton > 회원가입 </S.SignUpButton>
                </S.SignUpInfoWrapper>
            </S.SignUpWrap>
        </S.SignUpWrapper>
    )
}
export default SignUpStep2CompanyUI;