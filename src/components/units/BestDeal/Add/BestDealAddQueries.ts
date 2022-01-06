import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      name
      _id
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        address
        createdAt
        updatedAt
        deletedAt
      }
      buyer
      seller
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
