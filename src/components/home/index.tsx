import React from "react";
import IssueInput from "../teacher/issueInput";
import Issue from "../common/issue";
import { HomeContainer, HomeItemContainer, HomeTopContainer } from "./style";
import HomeDropDown from "./homeDropDown";
import HomeItem from "./homeItem";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTopContainer>
        <Issue />
        <IssueInput />
      </HomeTopContainer>
      <HomeDropDown />
      <HomeItemContainer>
        {Array.from({ length: 8 }).map((_, idx) => (
          <HomeItem />
        ))}
      </HomeItemContainer>
    </HomeContainer>
  );
};

export default Home;
