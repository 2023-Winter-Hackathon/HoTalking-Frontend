import React from "react";
import { IssueFormBtn, IssueInputContianer, IssueInputInput } from "./style";

const IssueInput = () => {
  return (
    <form>
      <IssueInputContianer>
        <IssueInputInput placeholder="요즘의 HOT 이슈는 무엇인가요?" />
        <IssueFormBtn>작성하기</IssueFormBtn>
      </IssueInputContianer>
    </form>
  );
};

export default IssueInput;
