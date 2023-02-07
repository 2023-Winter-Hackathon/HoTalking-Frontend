import { atom } from "recoil";

export const postClassificationKeyword = atom<"전체" | "선배" | "후배">({
  key: "post/postClassificationKeyword",
  default: "전체",
});
