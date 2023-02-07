import React from "react";
import { IssueContainer, IssueInfo, IssueTitle, IssueWriter } from "./stlye";

const Issue = () => {
  return (
    <IssueContainer>
      <IssueTitle>issue 🔥</IssueTitle>
      <IssueInfo>6월 제주도, 싱가폴 수학여행</IssueInfo>
      <IssueWriter>작성자: 백승하</IssueWriter>
    </IssueContainer>
  );
};

export default Issue;
