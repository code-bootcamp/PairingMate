import { Modal } from "antd";
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth = <P extends {}>(Component: ComponentType<P>) => (props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (!localStorage.getItem("refreshToken")) {
        Modal.warning({title:"접근 제한", content:"로그인 한 사람만 입장 가능합니다!"});
        router.push("/");
      }
    }, []);

    return <Component {...props} />;
  };