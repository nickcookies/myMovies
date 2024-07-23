import { useState } from "react";
import { useFetchMovies } from "../context/MovieProvider";
import loading from "../assets/loading animated svg/loading.svg";
import search from "../assets/icons/search.svg";
import horizontal from "../assets/icons/horizontal.svg";
import vertical from "../assets/icons/vertical.svg";
import { MovieList } from "./MovieList";
import { MovieCard } from "./MovieCard";

export function SearchBar() {
  const { filteredMovies, isLoading, setQuery, setTheMovieId } =
    useFetchMovies();
  const [inputValue, setInputValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  const [dataPerPage] = useState<number>(20);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setQuery(event.target.value);
  };
  // const currentData = filteredMovies.slice(indexOfFirstData, indexOfLastData);
  const handleClick = (id: string) => {
    console.log(id);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;

  const currentData = filteredMovies.slice(indexOfFirstData, indexOfLastData);

  // useEffect(() => {
  //   console.log(filteredMovies);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  console.log(changeTheme);

  return (
    <div className="flex justify-center items-center flex-col h-full my-10">
      <h1 className="text-light-slate lg:text-6xl lg:w-[600px] text-center font-semibold md:w-[450px] md:text-4xl sm:text-3xl sm:w-[350px] ">
        Need help finding the next movie?
      </h1>
      <span className="text-light-aqua lg:text-xl lg:w-[550px] text-center font-normal tracking-wide py-[18px] md:w-[450px] sm:w-[350px] sm:text-base sm:py-[16px]">
        Search for your next movie through HelloMovie's huge movie library
      </span>
      <div className="relative cursor-pointer">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <img className="w-[20px] h-[20px]" src={search} alt="search" />
        </div>
        <input
          className="outline-none hover:outline-light-aqua active:outline-light-aqua focus:outline-light-aqua lg:w-[500px] h-[60px] lg:text-xl font-normal bg-blue rounded-xl tracking-wide pl-[50px] text-light-slate md:w-[450px] md:h-[45px] sm:w-[300px] sm:text-sm"
          onChange={handleChange}
          value={inputValue}
          type="text"
          placeholder="Search for your next movie"
        />
      </div>
      {isLoading ? (
        <div className=" flex justify-center items-center flex-col w-full h-full py-8">
          <img className="" src={loading} alt="loading" />
          <h1 className="text-yellow text-center my-3">
            Searching in HelloMovie's...
          </h1>
        </div>
      ) : (
        <>
          {inputValue ? (
            <>
              <div className="flex flex-grow justify-between w-full my-3 lg:px-[40px] md:px-[20px] sm:px-[16px]">
                <div className="flex items-center  justify-between">
                  <div className="text-light-slate lg:text-xl sm:text-base flex gap-2">
                    Found
                    <span className="text-yellow">{filteredMovies.length}</span>
                    Movies
                  </div>
                </div>
                <div className="flex items-center text-sm text-light-slate flex-row">
                  layout:
                  <img
                    onClick={() => {
                      setChangeTheme(false);
                    }}
                    className=" bg-custom-black rounded-md w-[30px] h-[30px] p-2 mx-3 text-light-slate cursor-pointer active:fill-yellow hover:fill-yellow active:bg-blue"
                    src={vertical}
                    alt="vertical"
                  />
                  <img
                    onClick={() => {
                      setChangeTheme(true);
                    }}
                    className="bg-custom-black rounded-md w-[30px] h-[30px] p-2  text-light-slate cursor-pointer active:fill-yellow hover:fill-yellow active:bg-blue"
                    src={horizontal}
                    alt="horizontal"
                  />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {inputValue ? (
            <>
              <div className="flex flex-wrap justify-evenly w-full">
                {filteredMovies.length === 0 ? (
                  <p className="text-yellow lg:py-10 bg-custom-black lg:w-[500px] rounded-2xl lg:text-lg text-center md:w-[450px] md:mt-5 sm:w-[300px] sm:py-5">
                    No results found for "{inputValue}"
                  </p>
                ) : (
                  <>
                    {changeTheme === false ? (
                      <>
                        {currentData.map((elem, index) => {
                          return (
                            <MovieList
                              id={elem.id}
                              handleClick={handleClick}
                              key={index}
                              movies={elem}
                            />
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 lg:gap-12 md:gap-4 sm:gap-12 lg:px-[40px] md:px-[32px] sm:px-[12px] mb-10 justify-center w-full md:grid-cols-2 sm:grid-cols-1">
                          {currentData.map((elem) => {
                            return <MovieCard id={elem.id} movies={elem} />;
                          })}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
