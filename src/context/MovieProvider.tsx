/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useContext,
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
} from "react";
import { MoviesType } from "../types";
import { useApi } from "../hooks/useApi";
import { debounce } from "../utils/debounce";

interface ProviderProps {
  movies: MoviesType[];
  filteredMovies: MoviesType[];
  setTheMovieId: (value: string) => void;
  isLoading: boolean;
  movieId: string;
  setQuery: (value: string) => void;
}

export const FetchMoviesContext = createContext<ProviderProps>({
  movies: [],
  filteredMovies: [],
  isLoading: true,
  movieId: "",
  setTheMovieId: () => {},
  setQuery: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useFetchMovies = () => useContext(FetchMoviesContext);

export const FetchMoviesProvider = ({ children }: PropsWithChildren) => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MoviesType[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [movieId, setMovieId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Create a debounced version of the query update function
  const updateQuery = useCallback(
    debounce((searchTerm: string) => {
      setDebouncedQuery(searchTerm);
      setIsLoading(false); // End loading state when debounce completes
    }, 500), // Adjust the delay as needed
    []
  );

  // Fetch all movies
  const {
    data: allMovies = [],
    loading: apiIsLoading,
    error,
  } = useApi<MoviesType>(
    "https://imdb-top-100-movies.p.rapidapi.com/",
    undefined, // No additional parameters for the initial fetch
    {
      "x-rapidapi-key": "47c64d3dcemsh7dc31045264032ep11c2b4jsn6946b6d7c3d2",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    }
  );

  useEffect(() => {
    if (allMovies && allMovies.length > 0) {
      setMovies(allMovies);
      setFilteredMovies(allMovies);
    }
  }, [allMovies]);

  useEffect(() => {
    if (error) {
      console.error("API error:", error);
    }
  }, [error]);

  // Filter movies based on debounced query
  useEffect(() => {
    if (debouncedQuery) {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [debouncedQuery, movies]);

  // Handle input change and debounce the query
  const handleSetQuery = (value: string) => {
    setIsLoading(true); // Start the loading state when input changes
    updateQuery(value);
  };

  const setTheMovieId = (movieId: string) => {
    setMovieId(movieId);
  };

  const value: ProviderProps = {
    movies,
    filteredMovies,
    isLoading: isLoading || apiIsLoading, // Combine API loading and debounce loading states
    setTheMovieId,
    movieId,
    setQuery: handleSetQuery,
  };

  return (
    <FetchMoviesContext.Provider value={value}>
      {children}
    </FetchMoviesContext.Provider>
  );
};
