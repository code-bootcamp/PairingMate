import FindMatesAddUI from "./FindMatesAddPresenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import { CREATEBOARD } from "./FindMatesAddQueries";
import { useRouter } from "next/router";
import { Modal } from "antd";

const FindMatesAdd = () => {
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [inputTag, setInputTag] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState([]);

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

  return <FindMatesAddUI />;
};
export default FindMatesAdd;
