import { useQuery } from "react-query";
import postRepository from "../../repository/post/post.repository";

export const useGetPostsQuery = () =>
  useQuery("todo/useGetTodosQuery", () => postRepository.getPosts(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });
