import { useRef } from "react";
import { useCreateIssueMutation } from "../../queries/issue/issue.query";
import { createissueParam } from "../../repository/issue/issue.param";

const useCreateIssue = () => {
  const issueRef = useRef<HTMLInputElement>(null);
  const createIssueMutation = useCreateIssueMutation();

  const onSubmit = ({ issueName }: createissueParam) => {
    createIssueMutation.mutateAsync(
      { issueName },
      {
        onSuccess: () => {
          alert("이슈가 생성되었습니다.");
          reset();
        },
      }
    );
  };

  const reset = () => {
    issueRef.current!.value = "";
  };

  return { issueRef, onSubmit };
};

export default useCreateIssue;
