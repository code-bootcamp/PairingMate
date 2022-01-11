import styled from "@emotion/styled";

export const MapWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  padding: 100px;

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

export const ListWrapper = styled.div`
  width: 100%;
  height: 300px;

  .slick-prev {
    left: -60px;
    width: 50px;
    height: 50px;
    background-image: url("/images/sub/runday-course/prev.png");
    background-size: cover;
  }

  .slick-next {
    right: -60px;
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
  height: 250px;
  padding: 10px 10px 10px 10px;

  nav {
    height: 100%;
    padding: 20px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 20px 0px 5px 0px;
  }

  ul {
    margin-top: 25px;
    li {
      position: relative;
      width: 200px;
      height: 20px;
      margin-bottom: 16px;
    }

    span {
      position: absolute;
      width: 100%;
      top: 3px;
    }

    h4 {
      display: inline-block;
      margin-right: 4px;
    }
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
  }
`;
