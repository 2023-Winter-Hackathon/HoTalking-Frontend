import { customAxios } from "../../lib/axios/customAxios";
import { IssueResponse } from "../../types/issue/issue.type";
import { createissueParam, deleteIssueParam } from "./issue.param";

class IssueRepository {
  public async createIssue({ issueName }: createissueParam): Promise<void> {
    await customAxios.post("/issue/add", { issueName });
  }

  public async getIssue(): Promise<IssueResponse> {
    const { data } = await customAxios.get("/issue/get");
    return data;
  }

  public async deleteIssueById({ id }: deleteIssueParam): Promise<void> {
    await customAxios.delete(`/issue/delete/${id}`);
  }
}

export default new IssueRepository();
