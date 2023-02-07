import { useMutation } from "react-query"
import { PostParam } from "../../repository/post/post.param"
import postRepository from "../../repository/post/post.repository";
export const usePostWrite = ()=>{
    const mutation = useMutation(({ formData }:PostParam)=> 
        postRepository.createPost({ formData })
    );
    return mutation;
};
