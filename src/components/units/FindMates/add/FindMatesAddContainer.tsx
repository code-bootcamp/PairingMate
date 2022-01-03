import FindMatesAddUI from "./FindMatesAddPresenter";
import { FindmatesAddProps } from "./FindMatesAddTypes";
import { useMutation } from "@apollo/client";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import { CREATEBOARD } from "./FindMatesAddQueries";
import {
  replaceTags,
  getCategory,
} from "../../../../commons/libraries/utils/utils";
import { useRouter } from "next/router";
import { Modal } from "antd";

const FindMatesAdd = (props: FindmatesAddProps) => {
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [inputTag, setInputTag] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState([]);
  const [boardAddress, setBoardAddress] = useState({
    zipcode: "",
    address: "",
    addressDetail: "",
  });
  const [addFindmate] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATEBOARD);

  const router = useRouter();

  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeInputTags = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTag(event.target.value);
  };

  const onChangeTags = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    if (event.key === "Enter") {
      setTags((prev) => [...prev, "#" + target.value]);
      setInputTag("");
    }
  };

  const onClickDelteTags = (tag: string) => () => {
    const newTags = tags.filter((el) => el !== tag);
    setTags(newTags);
  };

  const onClickAddFindmate = async () => {
    try {
      const result = await addFindmate({
        variables: {
          createBoardInput: {
            writer: "user",
            password: "1234",
            title: category + "$%$%" + title,
            contents,
            images,
            youtubeUrl: tags.join(""),
            boardAddress,
          },
        },
      });
      router.push(`/find-mates/${result.data.createBoard._id}/`);
      console.log(result);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateFindmate = () => {};

  return (
    <FindMatesAddUI
      tags={tags}
      inputTag={inputTag}
      data={props.data}
      isUpdate={props.isUpdate}
      setImages={setImages}
      setBoardAddress={setBoardAddress}
      onChangeCategory={onChangeCategory}
      onChangeInputTags={onChangeInputTags}
      onChangeTags={onChangeTags}
      onClickDelteTags={onClickDelteTags}
      onClickAddFindmate={onClickAddFindmate}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickUpdateFindmate={onClickUpdateFindmate}
    />
  );
};
export default FindMatesAdd;
