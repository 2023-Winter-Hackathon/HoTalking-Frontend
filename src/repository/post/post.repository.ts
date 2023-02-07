import { customAxios } from "../../lib/axios/customAxios";
import { deletePostByIdParam, PostParam } from "./post.param";

class PostRepository {
  public async createPost({ formData }: PostParam): Promise<void> {
    await customAxios.post("/post/create", { formData });
  }

  public async deletePostById({ id }: deletePostByIdParam): Promise<void> {
    await customAxios.post(`/post/delete/${id}`);
  }

  // public async getPosts(): Promise<
}

export default new PostRepository();
