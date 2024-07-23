import star from "../assets/icons/star.svg";
import { MoviesType } from "../types";

export function MovieList({
  movies,
  id,
  handleClick,
}: {
  movies: MoviesType;
  id: string;
  handleClick: (value: string) => void;
}) {
  return (
    <a href={`/moviedetails/${id}`}>
      <div
        id={movies.id}
        className="flex justify-between gap-4 flex-col items-center w-full sm:h-full py-10 mx-4 overflow-hidden"
      >
        <div className="relative">
          <p className="absolute bg-blue rounded-r-md lg:top-12 text-light-slate text-sm text-center w-16 sm:top-7 md:top-10">
            {movies.year}
          </p>
          <img
            className="w-[300px] lg:h-full object-cover rounded-lg self-center cursor-pointer md:h-[90%]"
            src={movies.image}
            alt="movie"
          />
          <h2 className="text-light-aqua lg:text-xl text-center self-center mt-3 sm:text-xs sm:font-bold md:mt-1">
            {movies.title}
          </h2>
          <div className="flex justify-center flex-row items-center lg:py-2 md:py-0 md:visible md:w-full sm:invisible sm:py-0">
            <p className="text-light-slate text-center text-xs">
              {movies.genre.map((index) => {
                if (index.length > 1) {
                  return index + ", ";
                } else {
                  return index;
                }
              })}
            </p>
            {/* <p className="text-light-slate  text-center text-xs">
              {movies.duration}
            </p> */}
          </div>
          <div className="text-light-slate flex flex-row justify-center items-center text-center text-xs">
            IMDb
            <div>
              <img className="w-[15px] h-[15px] mx-1" src={star} alt="star" />
            </div>
            <span className="text-light-slate font-bold ">{movies.rating}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
