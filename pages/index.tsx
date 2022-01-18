import type { NextPage } from "next";
import MainBanner from "../src/components/commons/layout/banner/main/Mainbanner.presenter";
import MainSection01 from "../src/components/units/Main/Section01/Section01.container";
import MainSection02 from "../src/components/units/Main/Section02/Section02.container";
import ReactFullpage from "@fullpage/react-fullpage";
import MainSection03 from "../src/components/units/Main/Section03/Section03.container";
import MainSection04 from "../src/components/units/Main/Section04/Section04.container";
import Header from "../src/components/commons/layout/header/Header.container";
import Footer from "../src/components/commons/layout/footer/Footer.container";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ReactFullpage
        responsiveWidth={1320}
        responsiveHeight={850}
        scrollingSpeed={650}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <MainBanner />
                </div>
                <div className="section">
                  <MainSection01 />
                </div>
                <div className="section section02-bg">
                  <MainSection02 />
                </div>
                <div className="section section03-bg">
                  <MainSection03 />
                </div>
                <div className="section fp-auto-height">
                  <MainSection04 />
                </div>
                <div className="section fp-auto-height">
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
};

export default Home;
