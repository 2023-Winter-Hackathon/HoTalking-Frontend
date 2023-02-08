import styled from "styled-components";
import { HomeItemThumbnail, HomeItemTitle, HomeItemWrap } from "./style";
import config from "../../../config/config.json";
interface Props {
  author: string;
  id: string;
  role: string;
  title: string;
  onClick: () => void;
}

const HomeItem = ({ author, id, title, onClick }: Props) => {
  return (
    <HomeItemWrap onClick={onClick}>
      <HomeItemThumbnail src={`${config.server}/post/images/${id}`} />
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
