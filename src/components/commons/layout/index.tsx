import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import { ILayoutProps } from "./layout.types";
import { useRouter } from "next/router";
import SubBanner from "./banner/sub/SubBanner.container";
import SubNavigation from "./navigation/snb/SubNavigation.container";

const MAIN_ONLY = ["/"];
const HIDDEN_HEADERS = ["/login", "/signup", "/signup/step-2-company", "/signup/step-2-user"];
const HIDDEN_FOOTERS = ["/login", "/signup", "/signup/step-2-company", "/signup/step-2-user"];
const CSCENTER_ONLY = ["/cs-center"];
const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isMainOnly = MAIN_ONLY.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);
  const isCscenterOnly = CSCENTER_ONLY.includes(router.asPath);

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
              {isCscenterOnly ? <SubNavigation /> : ""}
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
