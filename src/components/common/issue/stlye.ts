import styled from "styled-components";

export const IssueContainer = styled.div`
  width: 699px;
  height: 96px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 87px;

  background: linear-gradient(
    91.05deg,
    rgba(255, 119, 119, 0.72) 4.8%,
    rgba(255, 119, 119, 0.72) 4.8%,
    rgba(255, 176, 119, 0.72) 98.74%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
`;

export const IssueRightWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const IssueLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const IssueTitle = styled.h1`
  margin-left: 44px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;

  color: #000000;
`;

export const IssueInfo = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  margin-left: 10px;
`;

export const IssueWriter = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  margin-right: 33px;
`;
