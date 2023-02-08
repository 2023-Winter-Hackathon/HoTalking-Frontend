import styled from "styled-components";

export const HomeItemWrap = styled.div`
  width: 297px;
  height: 317px;

  margin-top: 24px;

  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  overflow: hidden;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const HomeItemThumbnail = styled.img`
  width: 100%;
  height: 245px;
  background-color: gray;
  object-fit: cover;
`;

export const HomeItemTitle = styled.h2`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
`;
