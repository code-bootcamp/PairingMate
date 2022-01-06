import {
  useState,
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from "react";
import * as S from "../../../units/FindMates/add/FindMatesAddStyles";

interface TagsProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const TagsAdd = (props: TagsProps) => {
  const [inputTag, setInputTag] = useState("");

  const onChangeInputTags = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTag(event.target.value);
  };

  const onChangeTags = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    if (event.key === "Enter") {
      props.setTags((prev) => [...prev, "#" + target.value]);
      setInputTag("");
    }
  };

  const onClickDelteTags = (tag: string) => () => {
    const newTags = props.tags.filter((el) => el !== tag);
    props.setTags(newTags);
  };
  return (
    <>
      <S.TagsInput
        type="text"
        placeholder="해쉬태그를 입력해주세요"
        value={inputTag}
        onChange={onChangeInputTags}
        onKeyPress={onChangeTags}
      />
      <S.TagsWrapper>
        {props.tags.map((tag, index) => (
          <span
            onClick={onClickDelteTags(tag)}
            style={{ margin: "5px" }}
            key={index}
          >
            {tag}
          </span>
        ))}
      </S.TagsWrapper>
    </>
  );
};

export default TagsAdd;
