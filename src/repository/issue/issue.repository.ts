import { customAxios } from "../../lib/axios/customAxios";
import { IssueResponse } from "../../types/issue/issue.type";
import { createissueParam } from "./issue.param";

class IssueRepository {
  public async createIssue({ issueName }: createissueParam): Promise<void> {
    await customAxios.post("/issue/add", { issueName });
  }

  public async getIssue(): Promise<IssueResponse> {
    const { data } = await customAxios.get("/issue/get");
    return data;
  }
}

export default new IssueRepository();
