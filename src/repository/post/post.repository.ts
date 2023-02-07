import { customAxios } from "../../lib/axios/customAxios";
import { PostResponse } from "../../types/post/post.type";
import { deletePostByIdParam, PostParam } from "./post.param";

class PostRepository {
  public async createPost({ formData }: PostParam): Promise<void> {
    await customAxios.post("/post/create", { formData });
  }

  public async deletePostById({ id }: deletePostByIdParam): Promise<void> {
    await customAxios.post(`/post/delete/${id}`);
  }

  public async getPosts(): Promise<PostResponse> {
    const { data } = await customAxios.get("/post/list");
    return data;
  }
}

export default new PostRepository();
