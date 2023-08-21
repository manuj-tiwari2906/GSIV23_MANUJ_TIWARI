import { useState } from "react";
import "./App.scss";
import Navbar from "./components/common/navbar";
import { MovieDetails, MovieList } from "./components/movies";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="nav-and-screens">
      <Navbar onSearchChange={handleSearchChange} />
      <Routes>
        <Route exact path="/:title/:id" element={<MovieDetails />} />
        <Route exact path="/" element={<MovieList searchTerm={searchTerm} />} />
      </Routes>
    </div>
  );
}

export default App;
