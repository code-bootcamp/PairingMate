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
      buyer {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
      seller {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
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
      buyer {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
      seller {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
