console.log("Listo!")

let pokemon_name_input = document.getElementById("pokemon_name_input");
let pokemon_container = document.getElementById("pokemon_container");

async function findPokemon() {
  console.log("Buscando Pokemon...");
  console.log(pokemon_name_input.value);


  let pokemon_name = pokemon_name_input.value.toLowerCase();

  let pokemon = await findPokemonByName(pokemon_name);

  console.log(pokemon);

  pokemon_container.innerHTML = `
  <h1>${pokemon.name}</h1>
  <p>
    <img style="width:200px" src="${pokemon.sprites.other["official-artwork"].front_default}" /><br>
    <label>Altura:</label>
    <span>${pokemon.height}</span><br>
    <label>Peso:</label>
    <span>${pokemon.weight}</span>
  </p>
  `;
}

async function findPokemonByName(pokemon_name) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  let pokemon = await response.json()

  return pokemon
}