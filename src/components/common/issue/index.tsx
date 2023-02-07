import React, { useEffect, useState } from "react";
import { customAxios } from "../../../lib/axios/customAxios";
import { useGetIssueQuery } from "../../../queries/issue/issue.query";
import { IssueContainer, IssueInfo, IssueTitle, IssueWriter } from "./stlye";

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
      <IssueTitle>issue 🔥</IssueTitle>
      <IssueInfo>{getData.issueName}</IssueInfo>
      <IssueWriter>작성자: 백승하</IssueWriter>
    </IssueContainer>
  );
};

export default Issue;
