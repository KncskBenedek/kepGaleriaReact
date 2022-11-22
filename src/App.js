import "./App.css";
import Galeria from "./galeria/Galeria";

const kepek = [
  { src: "./kep.jpg", cim: "Kep1" },
  { src: "./kep.jpg", cim: "Kep2" },
  { src: "./kep.jpg", cim: "Kep3" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">Kép Galéria</header>
      <article className="galeria">
        <Galeria kepek={kepek}/>
      </article>
      <footer className="lablec">
        <p>Én</p>
      </footer>
    </div>
  );
}

export default App;
