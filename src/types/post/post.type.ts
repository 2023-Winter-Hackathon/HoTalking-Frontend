export interface PostItem {
  author: string;
  id: string;
  title: string;
}

export interface PostResponse {
  data: PostItem[];
}
