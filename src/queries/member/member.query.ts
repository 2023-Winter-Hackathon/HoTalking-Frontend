import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import memberRepository from "../../repository/member/member.repository";
import { MemberResponse } from "../../types/member/member.type";

export const useGetMember = (): UseQueryResult<MemberResponse, AxiosError> =>
  useQuery("member/getMyMember", () => memberRepository.getMember(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
