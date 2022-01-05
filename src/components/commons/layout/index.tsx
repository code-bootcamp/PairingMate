import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import { ILayoutProps } from "./layout.types";
import { useRouter } from "next/router";

const MAIN_ONLY = ["/"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isMainOnly = MAIN_ONLY.includes(router.asPath);
  return (
    <>
      {!isMainOnly ? (
        <>
          <Header />
          <div>{props.children}</div>
          <Footer />
        </>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
};

export default Layout;
