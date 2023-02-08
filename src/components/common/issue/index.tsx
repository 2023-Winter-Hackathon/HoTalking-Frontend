import React, { useEffect, useState } from "react";
import { customAxios } from "../../../lib/axios/customAxios";
import { useGetIssueQuery } from "../../../queries/issue/issue.query";
import IssueDelBtn from "./issueDelBtn";
import {
  IssueContainer,
  IssueInfo,
  IssueLeftWrap,
  IssueRightWrap,
  IssueTitle,
  IssueWriter,
} from "./stlye";

const Issue = () => {
  const { data } = useGetIssueQuery();

  console.log(data);

  return (
    <IssueContainer>
      <IssueRightWrap>
        <IssueTitle>issue 🔥</IssueTitle>
        <IssueInfo></IssueInfo>
      </IssueRightWrap>
      <IssueLeftWrap>
        <IssueDelBtn />
      </IssueLeftWrap>
    </IssueContainer>
  );
};

export default Issue;
