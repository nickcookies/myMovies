import {
  useEffect,
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import axios from "axios";
import { MoviesType } from "../types";

interface ProviderProps {
  movies: MoviesType[];
  moviesFunction: () => void;
  setTheMovieId: (value: string) => void;
  isLoading: boolean;
  movieId: string;
}

export const FetchMoviesContext = createContext<ProviderProps>({
  movies: [],
  moviesFunction: () => {},
  isLoading: true,
  movieId: "",
  setTheMovieId: () => {},
});

export const useFetchMovies = () => useContext(FetchMoviesContext);

export const FetchMoviesProvider = ({ children }: PropsWithChildren) => {
  const [movies, setAllMovies] = useState<MoviesType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<string>("");

  const fetchMovies = async () => {
    setIsLoading(true);
    await axios
      .get("https://imdb-top-100-movies.p.rapidapi.com/", {
        headers: {
          "x-rapidapi-key":
            "47c64d3dcemsh7dc31045264032ep11c2b4jsn6946b6d7c3d2",
          "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        },
      })
      .then((data) => {
        console.log(data);
        setAllMovies(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const setTheMovieId = (movieId: string) => {
    setMovieId(movieId);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const value: ProviderProps = {
    movies,
    moviesFunction: fetchMovies,
    isLoading,
    setTheMovieId,
    movieId,
  };

  return (
    <FetchMoviesContext.Provider value={value}>
      {children}
    </FetchMoviesContext.Provider>
  );
};
