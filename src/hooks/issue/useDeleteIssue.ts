import { useQueryClient } from "react-query";
import { useDeleteIssueMutation } from "../../queries/issue/issue.query";

interface Props {
  issueId: string;
}

const useDeleteTodo = ({ issueId }: Props) => {
  const queryClient = useQueryClient();

  const deleteIssueMutation = useDeleteIssueMutation();

  const onDelete = async () => {
    deleteIssueMutation.mutate(
      { id: issueId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("todo/useGetTodosQuery");
        },
      }
    );
  };

  return { onDelete, isDeleting: deleteIssueMutation };
};

export default useDeleteTodo;
