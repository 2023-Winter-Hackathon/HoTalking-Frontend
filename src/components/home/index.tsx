import React from "react";
import IssueInput from "../teacher/issueInput";
import Issue from "../common/issue";
import { HomeContainer, HomeItemContainer, HomeTopContainer } from "./style";
import HomeDropDown from "./homeDropDown";
import HomeItem from "./homeItem";
import { useGetPostsQuery } from "../../queries/post/post.query";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { data } = useGetPostsQuery();
  console.log(data);
  const navigate = useNavigate();
  
  return (
    <HomeContainer>
      <HomeTopContainer>
        <Issue />
        <IssueInput />
      </HomeTopContainer>
      <HomeDropDown />
      <HomeItemContainer>
        {data?.map((item) => (
          <HomeItem onClick={() => navigate(`/detail/${item.id}`)} {...item}/>
        ))}
      </HomeItemContainer>
    </HomeContainer>
  );
};

export default React.memo(Home);
