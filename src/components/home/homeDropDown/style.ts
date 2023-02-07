import styled from "styled-components";

export const HomeScheduleSideBarHeaderDropdownContainer = styled.div`
  width: 100px;
  height: 30px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 97px;
  margin-top: 20px;
  padding: 0px 5px;
  background: none;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: white;
  font-size: 15px;
`;

export const HomeScheduleSideBarHeaderDropdownIcon = styled.div<{
  fold: boolean;
}>`
  width: 10px;
  height: 10px;
  font-size: 10px;
  color: gray;
  transition: all 0.3s ease;
  transform: rotate(${({ fold }) => (fold ? "180deg" : "0deg")});
`;

export const HomeScheduleSideBarHeaderDropdownWrap = styled.div`
  width: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 35px;
  left: -1px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor4};
  border-radius: 5px;
  overflow: hidden;
`;

export const HomeScheduleSideBarHeaderDropdownItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
