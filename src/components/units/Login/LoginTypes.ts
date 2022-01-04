// Typescript 작성

import { ChangeEvent } from "react";

export interface LoginUIProps {
    onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickLogin: () => void;
}