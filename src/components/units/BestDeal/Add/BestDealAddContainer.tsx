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
import {
  getCategory,
  getTitle,
} from "../../../../commons/libraries/utils/utils";

const BestDealAdd = (props: BestdealAddProps) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [contents, setContents] = useState("");
  const [boardAddress, setBoardAddress] = useState({
    address: "",
  });
  const [phone, setPhone] = useState("");
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

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
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
            price: price,
            name: category + "$%$%" + title,
            tags: tags,
            contents: contents,
            useditemAddress: boardAddress,
            remarks: phone,
            images: images,
          },
        },
      });
      Modal.success({ content: "등록에 성공하였습니다" });
      console.log(result);
      router.push(`/best-deal/${result.data?.createUseditem._id}`);
    } catch (error) {
      console.log("상품등록 실패");
    }
  };

  const onClickUpdateBestdeal = async () => {
    const updateUseditemInput: UpdateUseditemInput = {};
    if (category !== "" && title === "")
      updateUseditemInput.name =
        category + "$%$%" + getTitle(props.data?.fetchUseditem.name);
    // 제목만 수정 되었을때
    if (title !== "" && category === "")
      updateUseditemInput.name =
        getCategory(props.data?.fetchUseditem.name) + "$%$%" + title;
    // 제목 카테고리 둘다 수정 되었을때
    if (category !== "" && title !== "")
      updateUseditemInput.name = category + "$%$%" + title;
    if (price !== Number("")) updateUseditemInput.price = price;
    if (phone !== "") updateUseditemInput.remarks = phone;
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
      onChangePhone={onChangePhone}
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
