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
  const [getData, setData] = useState<{ issueName: string }>({ issueName: "" });
  const GetData = async () => {
    const { data } = await customAxios.get("/issue/get");
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <IssueContainer>
      <IssueRightWrap>
        <IssueTitle>issue 🔥</IssueTitle>
        <IssueInfo>{getData.issueName}</IssueInfo>
      </IssueRightWrap>
      <IssueLeftWrap>
        <IssueDelBtn />
        <IssueWriter>작성자: 백승하</IssueWriter>
      </IssueLeftWrap>
    </IssueContainer>
  );
};

export default Issue;
