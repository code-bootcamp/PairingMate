import { Dispatch, ReactElement, SetStateAction } from "react";

export interface TabProps {
  children: ReactElement[];
}

export interface TabTitlesProps {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
  selectedTab: number;
}

export interface TabActivatedProps {
  index: number;
  selectedTab: number;
}
