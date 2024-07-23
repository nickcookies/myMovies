import star from "../assets/icons/star.svg";
import { MoviesType } from "../types";

export function Details({ movies }: { movies: MoviesType }) {
  return (
    <div className="z-10 w-[100vw] h-[100vh] bg-blue fixed">
      <div className="flex justify-between w-full bg-dark-slate mr-4 rounded-2xl mb-3">
        <div className="flex ">
          <div className="mr-10 w-[300px] h-[300px]">
            <img
              className="w-full h-full object-cover rounded-l-2xl "
              src={movies.image}
              alt={movies.image}
            />
          </div>
          <div className="relative flex flex-col justify-end items-end mb-4">
            <div>
              <p className="absolute bg-blue rounded-r-md top-12 text-light-slate text-sm text-center w-16 left-0">
                {movies.year}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-light-aqua text-3xl font-bold">
                {movies.title}
              </h1>
              <p className="text-light-slate">{movies.genre}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center ml-16 mt-6 w-full">
          <p className="text-light-slate ">IMDb</p>
          <div>
            <img
              className="w-[15px] h-[15px] mx-1 mt-1"
              src={star}
              alt="star"
            />
          </div>
          <span className="text-light-slate font-bold">{movies.rating}</span>
        </div>
      </div>
    </div>
  );
}
