import star from "../assets/icons/star.svg";
import { MoviesType } from "../types";

export function MovieCard({ movies, id }: { movies: MoviesType; id: string }) {
  return (
    <a
      href={`/moviedetails/${id}`}
      className="flex justify-between lg:w-full md:w-full sm:w-[110%] bg-custom-black rounded-2xl
    "
    >
      <div className="flex w-full ">
        <div className="mr-10 lg:w-[300px] lg:h-[300px] sm:w-[150px] sm:h-[150px] sm:mr-5">
          <img
            className="w-full h-full object-cover rounded-l-2xl "
            src={movies.image}
            alt={movies.image}
          />
        </div>
        <div className="relative flex flex-col justify-end items-end mb-4">
          <div>
            <p className="absolute lg:bg-blue rounded-r-md lg:top-12 text-light-slate text-sm text-center w-16 lg:left-0 sm:top-2 sm:bg-none sm:left-[-20px]">
              {movies.year}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-light-aqua lg:text-3xl font-bold sm:text-sm">
              {movies.title}
            </h1>
            <p className="text-light-slate md:text-xs">
              {movies.genre.map((index) => {
                if (index.length > 1) {
                  return index + ", ";
                } else {
                  return index;
                }
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="sm:absolute md:relative flex flex-row  lg:justify-center md:justify-start lg:ml-16 lg:mt-6 sm:ml-0 sm:mt-2 right-[20px]">
        <span className="text-light-slate lg:text-base md:text-xs">IMDb</span>
        <img
          className="w-[15px] h-[15px] mx-1 lg:mt-1 md:mt-0 "
          src={star}
          alt="star"
        />
        <span className="text-light-slate font-bold">{movies.rating}</span>
      </div>
    </a>
  );
}
