import { Main } from "../pages/Main";
import { Navbar } from "./navbar/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Register } from "../pages/Register";
import { List } from "../pages/List";
import { AnimeDetails } from "../pages/AnimeDetails";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Routes>
            <Route index path="/" element={<Main />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/search/:term" element={<List />}/>
            <Route path="/anime/:animeId" element={<AnimeDetails />}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
