import { useRouter } from 'next/router';
import React from 'react';

const SignPage = () => {
    const router = useRouter();
    function onClickMoveToSignIn() {
        router.push('/login');
    }

    function onClickMoveToSignUp() {
        router.push('/signup');
    }
    return (
        <div>
            <button onClick={onClickMoveToSignIn}>로그인하기</button> <br />
            <button onClick={onClickMoveToSignUp}>회원가입하기</button>
        </div>
    );
};

export default SignPage;
