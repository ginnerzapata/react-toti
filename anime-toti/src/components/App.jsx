import { Main } from "../pages/Main";
import { Navbar } from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Main/>
      </div>
    </div>
  );
}

export default App;
