import styled from "styled-components";

export const IssueInputContianer = styled.div`
  display: flex;
  align-items: center;
  width: 619px;
  height: 96px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 30px;
`;

export const IssueInputInput = styled.input`
  width: calc(100% - 81px);
  height: 100%;
  background: none;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #949191;
`;

export const IssueFormBtn = styled.button`
  height: 39px;
  width: 81px;
  background: #ff7777;
  border-radius: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;

  border: none;
`;
