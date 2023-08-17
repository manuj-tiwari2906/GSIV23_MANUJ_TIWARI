import "./App.css";
import Navbar from "./components/common/navbar";
import { MovieList } from "./components/movies";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
