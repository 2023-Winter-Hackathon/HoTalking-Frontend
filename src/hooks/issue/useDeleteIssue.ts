import { useQueryClient } from "react-query";
import { useDeleteIssueMutation } from "../../queries/issue/issue.query";

interface Props {
  todoId: string;
}

const useDeleteTodo = ({ todoId }: Props) => {
  const queryClient = useQueryClient();

  const deleteIssueMutation = useDeleteIssueMutation();

  const onDelete = async () => {
    deleteIssueMutation.mutate(
      { id: todoId },
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
