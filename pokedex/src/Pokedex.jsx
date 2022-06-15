import "./styles/styles.css"
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Pokecard } from "./components/Pokecard";
const Pokedex = () => {



  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Searchbar />
        <Pokecard  />
      </div>
    </div>
  );
}

export default Pokedex; 
