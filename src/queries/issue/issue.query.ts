import { useMutation, useQuery } from "react-query";
import { createissueParam } from "../../repository/issue/issue.param";
import issueRepository from "../../repository/issue/issue.repository";

export const useCreateIssueMutation = () => {
  const mutation = useMutation(({ issueName }: createissueParam) =>
    issueRepository.createIssue({ issueName })
  );

  return mutation;
};

export const useGetIssueQuery = () => {
  useQuery(["issue/useGetIssueQuery"], () => issueRepository.getIssue());
};
 