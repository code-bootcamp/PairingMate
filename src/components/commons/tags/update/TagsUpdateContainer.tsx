import {
  useState,
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { replaceTags } from "../../../../commons/libraries/utils/utils";

interface TagsProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  setIsUpdateTag: Dispatch<SetStateAction<boolean>>;
  data: string;
}

const TagsUpdate = (props: TagsProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [inputTag, setInputTag] = useState("");

  const onChangeInputTags = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTag(event.target.value);
  };

  const onChangeTags = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    if (event.key === "Enter") {
      if (isUpdate) {
        props.setTags((prev) => [...prev, "#" + target.value]);
      } else {
        props.setTags([...replaceTags(props.data), "#" + target.value]);
        setIsUpdate(true);
        props.setIsUpdateTag(true);
      }
      setInputTag("");
    }
  };

  const onClickDelteTags = (tag: string) => () => {
    if (isUpdate) {
      const newTags = props.tags.filter((el) => el !== tag);
      props.setTags(newTags);
    } else {
      const newTags = replaceTags(props.data).filter((el) => el !== tag);
      props.setTags(newTags);
      setIsUpdate(true);
      props.setIsUpdateTag(true);
    }
  };
  return (
    <>
      <div>
        태그 :
        <input
          type="text"
          value={inputTag}
          onChange={onChangeInputTags}
          onKeyPress={onChangeTags}
        />
        {isUpdate
          ? props.tags.map((tag, index) => (
              <span
                onClick={onClickDelteTags(tag)}
                style={{ margin: "5px" }}
                key={index}
              >
                {tag}
              </span>
            ))
          : replaceTags(props.data || "").map((tag, index) => (
              <span
                onClick={onClickDelteTags(tag)}
                style={{ margin: "5px" }}
                key={index}
              >
                {tag}
              </span>
            ))}
      </div>
    </>
  );
};

export default TagsUpdate;
