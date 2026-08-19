import { useState, useEffect } from 'react'; //hook
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')                                          //ca c'est promise
      .then((res) => res.json()) // format brute avadika json
      .then((data) => {
        setPokemons(data.results); // qd les donnees arrivent, on met dans le tableau
        setLoading(false); // qd la liste est arrivee, on met le chargement a false
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="app">
      <h1>Pokémon de 1 à 100</h1>
      <div className="grid">
        {pokemons.map((pokemon, index) => (
          <Pokemon 
            key={pokemon.name} 
            name={pokemon.name} 
            id={index + 1} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;