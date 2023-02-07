import { customAxios } from "../../lib/axios/customAxios";
import { issueParam } from "./issue.param";

class IssueRepository {
  public async createIssue({ issueName, period }: issueParam): Promise<void> {
    await customAxios.post("/issue/add", { issueName, period });
  }
}

export default new IssueRepository();
