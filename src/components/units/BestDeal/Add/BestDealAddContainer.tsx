import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import BestDealUI from "./BestDealAddPresenter";
import { CREATE_USED_ITEM } from "./BestDealAddQueries";
import { FormValues } from "./BestDealAddTypes";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";

const BestDealAdd = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [contents, setContents] = useState("");
  const [boardAddress, setBoardAddress] = useState({
    address: "",
  });
  const [images, setImages] = useState([]);

  const [addBestdeal] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

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

  const onClickAddBestdeal = async (data: FormValues) => {
    if (
      category === "" ||
      price === Number("") ||
      title === "" ||
      tags.length === 0 ||
      contents === "" ||
      boardAddress.address === ""
    ) {
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
      // router.push()
    } catch (error) {
      console.log("상품등록 실패");
    }
  };

  return (
    <BestDealUI
      setImages={setImages}
      setBoardAddress={setBoardAddress}
      tags={tags}
      setTags={setTags}
      onChangeCategory={onChangeCategory}
      onChangePrice={onChangePrice}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickAddBestdeal={onClickAddBestdeal}
    />
  );
};
export default BestDealAdd;
