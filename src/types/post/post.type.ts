export interface PostItem {
  author: string;
  comments: [
    {
      comment: string;
      id: string;
    }
  ];
  content: "string";
  files: [
    {
      storedFileName: "string";
    }
  ];
  title: "string";
}

export interface PostResponse extends Response {
  data: PostItem[];
}
