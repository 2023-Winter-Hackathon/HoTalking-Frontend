import React, { ChangeEvent, FormEvent, useState } from "react";
import { QueryClient } from "react-query";
import { useCreateIssueMutation } from "../../queries/issue/issue.query";
const Issue = () => {
  const [issue, setIssue] = useState("");
  const createIssueMutation = useCreateIssueMutation();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIssue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitTodo = async (e: FormEvent) => {
    const data = issue;
    e.preventDefault();

    createIssueMutation.mutateAsync(
      { data },
      {
        onSuccess: () => {
          setIssue("");
          QueryClient.invalidateQueries("todo/useGetTodosQuery");
        },
      }
    );
  };
  return { setIssue, onChangeText };
};

export default Issue;
