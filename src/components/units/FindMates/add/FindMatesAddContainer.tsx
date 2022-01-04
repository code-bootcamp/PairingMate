import FindMatesAddUI from "./FindMatesAddPresenter";
import { FindmatesAddProps } from "./FindMatesAddTypes";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import { CREATEBOARD } from "./FindMatesAddQueries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { replaceTags } from "../../../../commons/libraries/utils/utils";

const FindMatesAdd = (props: FindmatesAddProps) => {
  const [isUpdateTag, setIsUpdateTag] = useState(false);
  const [isUpdateImages, setIsUpdateImages] = useState(false);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
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
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateFindmate = () => {
    if (isUpdateTag) {
      console.log(tags);
    } else {
      console.log(replaceTags(props.data?.fetchBoard.youtubeUrl));
    }

    if (isUpdateImages) {
      console.log(images);
    } else {
      console.log(props.data?.fetchBoard.images);
    }
  };

  return (
    <FindMatesAddUI
      tags={tags}
      setTags={setTags}
      setIsUpdateTag={setIsUpdateTag}
      data={props.data}
      isUpdate={props.isUpdate}
      setImages={setImages}
      setIsUpdateImages={setIsUpdateImages}
      setBoardAddress={setBoardAddress}
      onChangeCategory={onChangeCategory}
      onClickAddFindmate={onClickAddFindmate}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickUpdateFindmate={onClickUpdateFindmate}
    />
  );
};
export default FindMatesAdd;
