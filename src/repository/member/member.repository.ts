import { customAxios } from "../../lib/axios/customAxios";
import { MemberResponse } from "../../types/member/member.type";

class MemberRepository {
  public async getMember(): Promise<MemberResponse> {
    const { data } = await customAxios.get("/member/info");
    return data;
  }
}

export default new MemberRepository();
