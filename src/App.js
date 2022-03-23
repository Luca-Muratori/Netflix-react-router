import "./App.css";
import "./components/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:movieID" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
