import styled from "@emotion/styled";

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  line-height: 52px;
  text-align: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 70px;
`;
export const BestdealWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const BestdealItem = styled.div`
  width: 25%;
  height: 375px;
  background-color: #dddddd;
`;
export const BestdealImg = styled.img`
  width: 100%;
  height: 240px;
`;
export const TextBox = styled.div`
  width: 100%;
  height: 135px;
  padding-left: 14px;
`;
export const BestdealTitle = styled.h4`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;
export const BestdealAddress = styled.h4`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
export const TagsWrapper = styled.div`
  height: 25px;
  margin-top: 14px;
  /* background-color: #c4c4c4;
  border-radius: 30px; */
`;
export const BestdealTags = styled.span`
  width: 50px;
  height: 23px;
  margin-right: 10px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  background-color: #c4c4c4;
`;
export const NavigationList = styled.ul`
  width: 100%;
  margin-top: 115px;

  li {
    display: inline-block;
    margin-right: 50px;
    padding: 10px 0;

    button {
      position: relative;
      font-size: 1.25rem;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: black;
        transition: 0.5s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`;
export const ProductItem = styled.div`
  width: 25%;
  height: 375px;
  background-color: #dddddd;
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 240px;
`;
export const ProductTextBox = styled.div`
  width: 100%;
  height: 135px;
  padding-left: 14px;
`;
export const ProductTitle = styled.h4`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;
export const ProductAddress = styled.h4`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
export const ProductTagsWrapper = styled.div`
  height: 25px;
  margin-top: 14px;
  /* background-color: #c4c4c4;
  border-radius: 30px; */
`;
export const ProductTags = styled.span`
  width: 50px;
  height: 23px;
  margin-right: 10px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  background-color: #c4c4c4;
`;
export const MoreButton = styled.button`
  width: 180px;
  height: 50px;
  margin-top: 300px;
  margin-left: 610px;
`;
