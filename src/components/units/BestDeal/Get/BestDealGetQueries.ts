import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        _id
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  query deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
