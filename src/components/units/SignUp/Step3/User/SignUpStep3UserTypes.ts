import { ChangeEventHandler, Dispatch, LegacyRef, MouseEventHandler, ReactEventHandler, SetStateAction } from "react";

// Typescript 작성
export interface SignUpStep3UserUIProps {
    Tags:string[],
    setTags:Dispatch<SetStateAction<string[]>>
    fileRef:LegacyRef<HTMLInputElement>,
    profileImage:string[],
    onChangeFile:ChangeEventHandler<HTMLInputElement>,
    onErrorHandle : ReactEventHandler<HTMLImageElement>,
    onChangeName:ChangeEventHandler<HTMLInputElement>,
    onClickProfileImage : () => void,
    onClickUpdateDoc:MouseEventHandler<HTMLButtonElement>,
}