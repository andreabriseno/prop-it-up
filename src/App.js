import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      < PersonCard
      name={"Doe, Jane"}
      age={ "Age:45" }
      hair={ "Hair color: black"}
      />
      < PersonCard
      name={"Fillmore, Millard"}
      age={ "Age:50" }
      hair={ "Hair color: brown"}
      />
      < PersonCard
      name={"Smith, John"}
      age={ "Age:88" }
      hair={ "Hair color: brown"}
      />
      < PersonCard
      name={"Smith, Maria"}
      age={ "Age:62" }
      hair={ "Hair color: brown"}
      />
    </div>
  );
}

export default App;
