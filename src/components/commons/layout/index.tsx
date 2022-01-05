import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import { ILayoutProps } from "./layout.types";
import { useRouter } from "next/router";
import SubBanner from "./banner/sub/SubBanner.container";

const MAIN_ONLY = ["/"];
const HIDDEN_HEADERS = ["/login", "/signup"];
const HIDDEN_FOOTERS = ["/login", "/signup"];

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isMainOnly = MAIN_ONLY.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <>
      {!isMainOnly ? (
        <>
          {isHiddenHeader && isHiddenFooter ? (
            <div>{props.children}</div>
          ) : (
            <>
              <Header />
              <SubBanner />
              <div>{props.children}</div>
              <Footer />
            </>
          )}
        </>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
};

export default Layout;
