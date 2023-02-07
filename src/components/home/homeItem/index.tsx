import { HomeItemThumbnail, HomeItemTitle, HomeItemWrap } from "./style";

const HomeItem = ({ data }: any) => {
  return (
    <HomeItemWrap>
      <HomeItemThumbnail />
      <HomeItemTitle>뉴진스 강해린</HomeItemTitle>
    </HomeItemWrap>
  );
};

export default HomeItem;
