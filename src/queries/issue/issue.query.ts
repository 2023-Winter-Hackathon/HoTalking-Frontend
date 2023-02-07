import { useMutation } from "react-query";
import { issueParam } from "../../repository/issue/issue.param";
import issueRepository from "../../repository/issue/issue.repository";

export const useCreateIssueMutation = () => {
  const mutation = useMutation(({ issueName, period }: issueParam) =>
    issueRepository.createIssue({ issueName, period })
  );

  return mutation;
};

export const useGetIssueMutation;
