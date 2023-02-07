import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { useCreateIssueMutation } from "../../queries/issue/issue.query";

const useGetIssue = () => {
  const queryClient = useQueryClient();

  const createIssueMutation = useCreateIssueMutation();

  const [issueName, setIssueName] = useState("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);

    setIssueName(value);
  };

  const onSubmitTodo = async (e: FormEvent) => {
    e.preventDefault();

    createIssueMutation.mutateAsync(
      { issueName },
      {
        onSuccess: () => {
          setIssueName("");
          queryClient.invalidateQueries("issue/useGetIssueQuery");
        },
      }
    );
  };

  return { issueName, onChangeText, onSubmitTodo };
};

export default useGetIssue;
