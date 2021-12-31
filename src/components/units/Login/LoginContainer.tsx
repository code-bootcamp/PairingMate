import LoginUI from "./LoginPresenter";
import { Modal } from 'antd'

const Login = () => {

    const onClickModal = () => {
        Modal.success({content: "성공"});
    }

    return(
        <>
            <LoginUI onClickModal={onClickModal}/>
        </>
    )
}
export default Login;