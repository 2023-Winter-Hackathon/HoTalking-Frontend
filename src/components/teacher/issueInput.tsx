import { useRecoilState } from "recoil";
import useGetIssue from "../../hooks/issue/useCreateIssue";
import { useGetMember } from "../../queries/member/member.query";
import { IssueFormBtn, IssueInputContianer, IssueInputInput } from "./style";

const IssueInput = () => {
  const { issueName, onChangeText, onSubmitTodo } = useGetIssue();
  const { data } = useGetMember();
  console.log(data);

  return (
    <>
      {
        <form onSubmit={onSubmitTodo}>
          <IssueInputContianer>
            <IssueInputInput
              onChange={onChangeText}
              value={issueName}
              placeholder="요즘의 HOT 이슈는 무엇인가요?"
            />
            <IssueFormBtn>작성하기</IssueFormBtn>
          </IssueInputContianer>
        </form>
      }
    </>
  );
};

export default IssueInput;
