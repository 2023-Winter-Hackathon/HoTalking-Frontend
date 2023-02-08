import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useGetMember } from "../../queries/member/member.query";
import { useGetPostsQuery } from "../../queries/post/post.query";
import { postClassificationKeyword } from "../../store/keyword.store";
import { PostItem } from "../../types/post/post.type";

const useHomePost = () => {
  const classificationKeyword = useRecoilValue(postClassificationKeyword);
  const [post, setPost] = useState<PostItem[]>([]);

  const { data: PostsData } = useGetPostsQuery()!;
  const { data: memberData } = useGetMember();

  const loadParentPost = () => {
    setPost(PostsData?.filter((post) => post.role === "선배")!);
  };

  const loadJuniorPost = () => {
    setPost(PostsData?.filter((post) => post.role === "후배")!);
  };

  const loadAllPost = () => {
    if (PostsData) {
      setPost(PostsData);
    }
  };

  const handleSchedules = (scope: string) => {
    setPost([]);

    switch (scope) {
      case "전체":
        loadAllPost();
        break;

      case "선배":
        loadParentPost();
        break;

      case "후배":
        loadJuniorPost();
        break;

      default:
        loadAllPost();
        break;
    }
  };

  useEffect(() => {
    console.log(post);
  }, [post]);

  useEffect(() => {
    if (PostsData) {
      handleSchedules(classificationKeyword);
    }
  }, [PostsData, classificationKeyword]);

  return {
    post,
  };
};

export default useHomePost;
