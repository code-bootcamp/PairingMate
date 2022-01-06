import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
      youtubeUrl
      images
      createdAt
      user {
        name
      }
      boardAddress {
        address
      }
      likeCount
    }
  }
`;
