export interface PostItem {
  author: string;
  id: string;
  role: string;
  title: string;
}

export interface PostResponse {
  data: PostItem[];
}
