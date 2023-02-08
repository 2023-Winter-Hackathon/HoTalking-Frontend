import { HomeItemThumbnail, HomeItemTitle, HomeItemWrap } from "./style";

interface Props {
  author: string;
  id: string;
  title: string;
}

const HomeItem = ({ author, id, title }: Props) => {
  return (
    <HomeItemWrap>
      <HomeItemThumbnail />
      <HomeItemTitle></HomeItemTitle>
    </HomeItemWrap>
  );
};

export default HomeItem;
