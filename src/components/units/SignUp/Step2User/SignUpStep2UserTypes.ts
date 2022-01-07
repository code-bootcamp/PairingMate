import { ChangeEvent } from "react";

// Typescript 작성
export interface SignUpStep2UserUIProps {
    onChangeInputs : (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePasswordChk : (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSignUp: () => void;    
}