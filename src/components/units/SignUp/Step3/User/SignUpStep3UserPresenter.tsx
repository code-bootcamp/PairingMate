import { SignUpStep3UserUiProps } from "./SignUpStep3UserTypes";

const SignUpStep3UserUI = (props: SignUpStep3UserUiProps) => {

    return (
        <>
            <h1>PairingMate에서<br />
            <strong>당신의 Best Mate를 만나보세요</strong>
            </h1>
            <div
                style={{
                width: "144px",
                height: "144px",
                backgroundColor: "lightgray",
                }}
                onClick={props.onClickProfileImage}
            >
            <img
                src={`https://storage.googleapis.com/${props.profileImage[0]}`}
                style={{ width: "144px", height: "144px" }}
            />
            </div>
            <input
                ref={props.fileRef}
                style={{
                    display: "none",
                    width: "300px",
                    height: "100px",
                    backgroundColor:"red"
                }}
                type="file"
                onChange={props.onChangeFile}
            />
            <h4>프로필 사진을 등록해주세요</h4>
            닉네임 : <input type="text" placeholder="닉네임을 입력해주세요." onChange={props.onChangeName}/>

            <h4>관심사 체크하기</h4>
            
            <button onClick={props.onClickUpdateDoc}> 등록하기 </button>
        </>
    )
}
export default SignUpStep3UserUI;