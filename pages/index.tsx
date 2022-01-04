import type { NextPage } from "next";
import MainBanner from "../src/components/commons/layout/banner/main/Mainbanner.presenter";
import MainSection01 from "../src/components/units/Main/Section01/Section01.container";
import MainSection02 from "../src/components/units/Main/Section02/Section02.container";
import ReactFullpage from "@fullpage/react-fullpage";

const Home: NextPage = () => {
  return (
    <>
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
                <div className="section">
                  <MainSection02 />
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
