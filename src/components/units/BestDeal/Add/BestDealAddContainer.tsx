import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import BestDealUI from "./BestDealAddPresenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./BestDealAddQueries";
import { BestdealAddProps, UpdateUseditemInput } from "./BestDealAddTypes";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";

const BestDealAdd = (props: BestdealAddProps) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [contents, setContents] = useState("");
  const [boardAddress, setBoardAddress] = useState({
    address: "",
  });
  const [images, setImages] = useState([]);
  const [isUpdateTag, setIsUpdateTag] = useState(false);
  const [isUpdateImages, setIsUpdateImages] = useState(false);

  const [addBestdeal] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateBestdeal] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const router = useRouter();

  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickAddBestdeal = async () => {
    if (
      category === "" ||
      price === Number("") ||
      title === "" ||
      tags.length === 0 ||
      contents === "" ||
      boardAddress.address === ""
    ) {
      console.log("zzz", category);
      Modal.warning({ content: "모든 내용을 입력해주세요" });
      return;
    }
    if (images.length === 0) {
      Modal.warning({ content: "최소 1장의 이미지를 넣어주세요" });
      return;
    }
    try {
      const result = await addBestdeal({
        variables: {
          createUseditemInput: {
            remarks: category,
            price: price,
            name: title,
            tags: tags,
            contents: contents,
            useditemAddress: boardAddress,
            images: images,
          },
        },
      });
      Modal.success({ content: "등록에 성공하였습니다" });
      console.log(result);
      router.push(`/best-deal/${router.query.bestdealId}`);
    } catch (error) {
      console.log("상품등록 실패");
    }
  };

  const onClickUpdateBestdeal = async () => {
    const updateUseditemInput: UpdateUseditemInput = {};
    if (category !== "") updateUseditemInput.remarks = category;

    if (price !== Number("")) updateUseditemInput.price = price;

    if (title !== "") updateUseditemInput.name = title;

    if (contents !== "") updateUseditemInput.contents = contents;

    if (isUpdateTag) updateUseditemInput.tags = tags.join[""];
    if (isUpdateImages) updateUseditemInput.images = images;
    if (boardAddress.address !== "")
      updateUseditemInput.useditemAddress = boardAddress;
    if (images.length === 0 && isUpdateImages) {
      Modal.warning({ content: "최소 1장의 이미지를 넣어주세요" });
      return;
    }

    try {
      await updateBestdeal({
        variables: {
          useditemId: String(router.query.bestdealId),
          updateUseditemInput,
        },
      });
      Modal.success({ content: "수정되었습니다" });
      router.push(`/best-deal/${router.query.bestdealId}`);
    } catch (error) {
      console.log("수정에 실패하였습니다");
    }
  };

  return (
    <BestDealUI
      setImages={setImages}
      tags={tags}
      setTags={setTags}
      onChangeCategory={onChangeCategory}
      onChangePrice={onChangePrice}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickAddBestdeal={onClickAddBestdeal}
      data={props.data}
      isUpdate={props.isUpdate}
      setIsUpdateImages={setIsUpdateImages}
      setIsUpdateTag={setIsUpdateTag}
      setBoardAddress={setBoardAddress}
      onClickUpdateBestdeal={onClickUpdateBestdeal}
    />
  );
};
export default BestDealAdd;
