import { Header, SearchBar, Footer } from "../components/index";

const Movies = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between w-full">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Movies;
