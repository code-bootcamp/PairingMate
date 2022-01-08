import styled from "@emotion/styled";

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
  border: 1px solid blue;
  background-color: #ebebeb;
`;
