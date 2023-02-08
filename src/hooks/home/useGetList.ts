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
  console.log();

  const loadMyGradeSchedules = () => {
    setPost(
      PostsData?.filter(
        (post) =>
          post.role.indexOf(String(memberData?.role)) > -1 ||
          post.role === "전교생"
      )!
    );
  };

  const loadAllSchedules = () => {
    setPost(PostsData);
  };

  const handleSchedules = (scope: string) => {
    setPost([]);

    switch (scope) {
      case "전체 일정":
        loadAllSchedules();
        break;

      case "내 일정":
        loadMyGradeSchedules();
        break;

      default:
        loadAllSchedules();
        break;
    }
  };

  useEffect(() => {
    if (schedulesData?.data) {
      handleSchedules(classificationKeyword);
    }
  }, [schedulesData?.data, classificationKeyword]);

  return {
    post,
  };
};

export default useHomePost;
