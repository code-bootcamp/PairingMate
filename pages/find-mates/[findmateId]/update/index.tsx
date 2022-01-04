import FindMatesAdd from "../../../../src/components/units/FindMates/add/FindMatesAddContainer";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;

const FindmatesUpdatePage = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.findmateId) } }
  );

  return <FindMatesAdd data={data} isUpdate={true} />;
};

export default FindmatesUpdatePage;
