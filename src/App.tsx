import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/moviedetails/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
