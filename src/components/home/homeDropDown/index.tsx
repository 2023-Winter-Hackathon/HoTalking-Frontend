import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { postClassificationKeyword } from "../../../store/keyword.store";
import {
  HomeScheduleSideBarHeaderDropdownContainer,
  HomeScheduleSideBarHeaderDropdownIcon,
  HomeScheduleSideBarHeaderDropdownItem,
  HomeScheduleSideBarHeaderDropdownWrap,
} from "./style";
import { HOME_POST_DROPDOWN_ITEMS } from "../../../constants/keyword/keyword.constant";

const HomeDropDown = () => {
  const [classificationKeyword, setClassificationKeyword] = useRecoilState(
    postClassificationKeyword
  );

  const [fold, setFold] = useState(true);

  return (
    <HomeScheduleSideBarHeaderDropdownContainer
      onClick={() => setFold((prev) => !prev)}
    >
      {classificationKeyword}
      <HomeScheduleSideBarHeaderDropdownIcon fold={fold}>
        <AiFillCaretDown />
      </HomeScheduleSideBarHeaderDropdownIcon>
      {!fold && (
        <HomeScheduleSideBarHeaderDropdownWrap>
          {HOME_POST_DROPDOWN_ITEMS.map((item) => (
            <HomeScheduleSideBarHeaderDropdownItem
              onClick={() => setClassificationKeyword(item)}
            >
              {item}
            </HomeScheduleSideBarHeaderDropdownItem>
          ))}
        </HomeScheduleSideBarHeaderDropdownWrap>
      )}
    </HomeScheduleSideBarHeaderDropdownContainer>
  );
};

export default HomeDropDown;
