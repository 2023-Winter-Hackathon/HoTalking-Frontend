import React from "react";
import IssueInput from "../teacher/issueInput";
import Issue from "../common/issue";
import { HomeContainer, HomeTopContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTopContainer>
        <Issue />
        <IssueInput />
      </HomeTopContainer>
    </HomeContainer>
  );
};

export default Home;
