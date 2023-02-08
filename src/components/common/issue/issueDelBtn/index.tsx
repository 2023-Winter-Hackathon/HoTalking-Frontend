import { IssueDelBtnContainer } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import useDeleteTodo from "../../../../hooks/issue/useDeleteIssue";

interface Props {
  author: string;
  id: string;
  issueName: string;
}

const IssueDelBtn = () => {
  return (
    <IssueDelBtnContainer>
      <AiOutlineClose />
    </IssueDelBtnContainer>
  );
};
export default IssueDelBtn;
