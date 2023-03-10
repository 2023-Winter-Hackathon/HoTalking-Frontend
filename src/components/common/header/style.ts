import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
export const HeadContainer = styled.div`
  height: 66px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
`;

export const HeadLogo = styled.img``;

export const HeadTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitleColor = styled.span`
  color: #ff7777;
`;

export const HeadContants1 = styled.div`
  display: flex;
  margin-left: 120px;
`;

export const HeadContants2 = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-right: 120px;
`;

export const HeadLogin = styled.div`
  width: 100px;
  height: 39px;
  background: #ff7777;
  border-radius: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const HeadSearch = styled(AiOutlineSearch)`
  width: 29px;
  height: 28px;
  cursor: pointer;
`;

export const HeadWrite = styled.div`
  width: 100px;
  height: 39px;
  background: #ff7777;
  border-radius: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const HeadProfile = styled.img`
  width:60px;
  height:60px;
  cursor: pointer;
`;
