export type Data = {
  playlists: [];
  topics: [];
  public: boolean;
  _id: string;
  __v: number;
  description: string;
  publishDate: string;
  title: string;
  urlTitle: string;
};

export type HomeProps = {
  data: Data[];
};
