import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  width: 1400px;
  height: 300px;
  margin: 20px;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  .slick-list {
    background-color: gold;
    text-align: center;
  }
`;

export const SliderInnerDiv = styled.div`
  width: 90%;
  height: 200px;
  border-radius: 15px;
  background-color: #ebebeb;
`;
