import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        address
      }
      images
      createdAt
    }
  }
`;
