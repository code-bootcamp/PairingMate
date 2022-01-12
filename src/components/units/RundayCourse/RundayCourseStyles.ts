import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 50px;
  padding: 50px;

  g {
    .cls-1 {
      transition: 0.5s;
    }
    &:hover {
      .cls-1 {
        fill: #213358;
        filter: drop-shadow(3px 3px 2px #324e86);
        transition: 0.5s;
        cursor: pointer;
      }

      .cls-3 {
        fill: white;
      }
    }
  }
`;

export const WeahterInfo = styled.div`
  position: absolute;
  top: 0px;
  left: 40px;
  width: 20%;
  height: auto;
  padding: 10px 10px 0px 10px;
  background-color: #d3d1ce;
  border-radius: 10px;

  img {
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    margin-bottom: 30px;
    color: white;
  }

  li {
    margin-bottom: 20px;

    span {
      color: white;
    }
  }

  @media screen and ${theme.tablet} {
    h1 {
      font-size: ${theme.fontsize.fs16};
      margin-bottom: 10px;
    }
    li {
      margin-bottom: 5px;

      span {
        font-size: ${theme.fontsize.fs14};
      }
    }
  }

  @media screen and (max-width: 619px) {
    display: none;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 0px 50px 0px 50px;

  .slick-prev {
    left: -45px;
    width: 50px;
    height: 50px;
    background-image: url("/images/sub/runday-course/prev.png");
    background-size: cover;
  }

  .slick-next {
    right: -45px;
    width: 50px;
    height: 50px;
    background-image: url("/images/sub/runday-course/next.png");
    background-size: cover;
  }

  .slick-prev::before,
  .slick-next:before {
    font-size: 0px;
  }
`;

export const SliderInnerDiv = styled.div`
  height: auto;
  padding: 10px 10px 10px 10px;

  nav {
    height: auto;
    padding: 20px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);

    h5 {
      text-align: center;
      margin-top: 30px;
      font-size: ${theme.fontsize.fs24};
      color: ${theme.colorPoint};

      @media screen and ${theme.laptop} {
        margin-top: 20px;
      }
    }
  }

  h3 {
    margin: 20px 0px 5px 0px;

    @media screen and ${theme.laptop} {
      margin: 10px 0px 5px 0px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${theme.fontsize.fs18};
    }
  }

  p {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    color: #d3d1ce;
    @media screen and ${theme.laptop} {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  ul {
    margin-top: 25px;
    li {
      position: relative;
      width: 200px;
      height: 20px;
      margin-bottom: 16px;

      @media screen and ${theme.tablet} {
        margin-bottom: 7px;
      }
    }

    span {
      position: absolute;
      width: 100%;
      top: 3px;
      color: ${theme.colorPoint};
    }

    h4 {
      display: inline-block;
      margin-right: 4px;
      color: ${theme.colorPoint};
    }
  }
`;

export const PointName = styled.span`
  @media screen and (max-width: 1365px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 15px;

  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }

  @media screen and ${theme.laptop} {
    width: 15px;
    height: 15px;
  }
`;
