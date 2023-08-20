import "./App.scss";
import Navbar from "./components/common/navbar";
import { MovieDetails, MovieList } from "./components/movies";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="nav-and-screens">
      <Navbar />
      <Routes>
        <Route exact path="/:title/:id" element={<MovieDetails />} />
        <Route exact path="/" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
