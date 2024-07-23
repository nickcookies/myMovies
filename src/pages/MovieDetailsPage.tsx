import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components";
import { useApi } from "../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { MoviesType } from "../types";
import star from "../assets/icons/star.svg";
import arrow from "../assets/icons/arrow.svg";

export function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [oneMovie, setOneMovie] = useState<MoviesType>();
  const { data } = useApi<MoviesType>(
    `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
    undefined,
    {
      "x-rapidapi-key": "47c64d3dcemsh7dc31045264032ep11c2b4jsn6946b6d7c3d2",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    }
  );

  useEffect(() => {
    data && setOneMovie(data[0]);
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <div
        id={oneMovie?.id}
        className="flex justify-center flex-col w-full items-center my-14 lg:px-[40px] md:px-[20px] sm:px-[16px]"
      >
        <div className="relative flex lg:flex-row md:flex-row md:w-[700px] lg:w-[1200px] justify-between bg-custom-black rounded-2xl sm:flex-col sm:w-[280px]">
          <img
            className="lg:rounded-l-2xl lg:w-[350px] md:rounded-tr-none md:rounded-l-2xl h-[500px] sm:w-[400px] sm:rounded-t-2xl"
            src={oneMovie?.image}
            alt={oneMovie?.image}
          />
          <div className="absolute bg-blue rounded-r-md lg:top-16 text-light-slate lg:text-sm text-center w-16 lg:left-0 sm:top-16 sm:py-2 sm:text-lg">
            {oneMovie?.year}
          </div>

          <div className="flex flex-col lg:px-[40px]">
            <h1 className="text-light-aqua text-4xl font-bold lg:mt-[20px] md:mt-[5px] lg:mx-0 sm:mx-3 sm:text-2xl">
              {oneMovie?.title}
            </h1>
            <div className="text-light-slate text-lg lg:pt-[40px] md:pt-[12px] md:text-base lg:mx-0 sm:mx-3">
              {oneMovie?.description}
            </div>
            <div className="flex lg:flex-row text-light-slate lg:py-[40px] md:py-[12px] border-b-[1px] border-l-dark-slate lg:mx-0 sm:flex-col sm:mx-3">
              <span className="text-light-slate lg:text-base md:text-xs pr-2">
                Genre:{" "}
              </span>
              {oneMovie?.genre?.map((index) => {
                if (index.length > 1) {
                  return index + " ";
                } else {
                  return index;
                }
              })}

              <div className="text-light-slate flex flex-row lg:ml-[500px] sm:ml-[0px]">
                <span className="text-light-slate lg:text-base md:text-xs">
                  IMDb:
                </span>
                <img
                  className="w-[15px] h-[15px] mx-2 lg:mt-1 md:mt-0 "
                  src={star}
                  alt="star"
                />
                <span className="font-bold">{oneMovie?.rating}</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-between py-10">
              <div className="text-light-aqua lg:mx-0 sm:mx-3">
                Director:
                <span className="text-light-slate pl-3  ">
                  {oneMovie?.director}
                </span>
              </div>
              <div className="text-light-aqua lg:mx-0 sm:mx-3">
                <span>Writers: </span>
                {oneMovie?.writers?.map((index) => {
                  if (index.length > 1) {
                    return index + " ";
                  } else {
                    return index;
                  }
                })}
              </div>
              <div className="flex flex-row">
                <span className="text-light-aqua lg:mx-0 sm:mx-3">
                  Description:
                </span>
                <span className="text-light-slate sm:mb-[12px]">
                  <p className="pl-6 ">{oneMovie?.description}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="absolute sm:bottom-[36%] sm:left-[16%] flex items-center pl-2 pb-1">
            <img
              className="w-[20px] h-[20px] hover:fill-yellow"
              src={arrow}
              alt="arrow"
            />
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue text-light-slate m-[40px] h-8 w-44 rounded-2xl hover:border-light-aqua hover:text-yellow border-[1px] border-blue"
          >
            Back To Results
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
