import styled from "styled-components";
import { HomeItemThumbnail, HomeItemTitle, HomeItemWrap } from "./style";

interface Props {
  author: string;
  id: string;
  role: string;
  title: string;
}

const HomeItem = ({ author, id, role, title }: Props) => {
  return (
    <HomeItemWrap>
      <HomeItemThumbnail />
      <HomeItemBottom>
        <HomeItemTitle>{title}</HomeItemTitle>
        <HomeItemAuthor>{author}</HomeItemAuthor>
      </HomeItemBottom>
    </HomeItemWrap>
  );
};

export default HomeItem;

export const HomeItemBottom = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const HomeItemAuthor = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding-top: 30px;
`;
