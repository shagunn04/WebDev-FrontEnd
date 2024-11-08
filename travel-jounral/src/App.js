import Navbar from "./Navbar";
import Card from "./Card.js"
import "./Style.css";
import Data from "./Data"
function App() {

  const place=Data.map(Comp=>
    <Card {...Comp}/>
  )
  return (
    <div className="App">
      <Navbar/>
      <div className="Catalogue">
       {place}
      </div>
    </div>
  );
}

export default App;
