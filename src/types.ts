export type MoviesType = {
  rank: number;
  title: string;
  description: string;
  image: string;
  big_image: string;
  genre: string[];
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  imdbid: string;
  imdb_link: string;
  director?: string[];
  writers: string[];
};

export type TypeOfParams = {
  key: string;
  host: string;
};
