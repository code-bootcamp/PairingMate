import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
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
        addressDetail
      }
      seller {
        _id
        email
      }
    }
  }
`;

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
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
        addressDetail
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
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
