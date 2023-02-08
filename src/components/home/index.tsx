import React from "react";
import IssueInput from "../teacher/issueInput";
import Issue from "../common/issue";
import { HomeContainer, HomeItemContainer, HomeTopContainer } from "./style";
import HomeDropDown from "./homeDropDown";
import HomeItem from "./homeItem";
import { useGetPostsQuery } from "../../queries/post/post.query";
import { useNavigate } from "react-router-dom";
import useHomePost from "../../hooks/home/useGetList";
const Home = () => {
  const { data } = useGetPostsQuery();
  const navigate = useNavigate();
  const { post } = useHomePost();

  return (
    <HomeContainer>
      <HomeTopContainer>
        <Issue />
        <IssueInput />
      </HomeTopContainer>
      <HomeDropDown />
      <HomeItemContainer>
        {data?.map((item) => (
          <HomeItem onClick={() => navigate(`/detail/${item.id}`)} {...item} />
        ))}
      </HomeItemContainer>
    </HomeContainer>
  );
};

export default React.memo(Home);
