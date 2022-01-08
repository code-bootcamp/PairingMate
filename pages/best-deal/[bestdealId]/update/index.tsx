import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import BestDealAdd from "../../../../src/components/units/BestDeal/Add/BestDealAddContainer";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      reamrks
      contents
      price
      tags
      images
      useditemAddress {
        _id
        address
      }
      seller
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const BestDealUpdatePage = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.bestdealId) },
  });

  return <BestDealAdd data={data} isUpdate={true} />;
};

export default BestDealUpdatePage;
