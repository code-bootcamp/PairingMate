import { ChangeEvent } from "react";

// Typescript 작성
export interface companyInputsProps {
    email? : string;
    name? : string;
    password? : string;
}

export interface SignUpStep2CompanyUIProps {
    onChangeInputs : (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePasswordChk : (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSignUp: () => void;
}
