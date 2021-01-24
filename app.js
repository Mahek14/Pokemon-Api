const pokedox = document.getElementById("pokedox");

const detailPoke = ()=> {

    const promises = [];

    for (let i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()))
    }
        Promise.all(promises).then(results =>{
            const pokemon = results.map( (data) => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                weight: data.weight,
                height: data.height,
                type:data.types.map((type)=> type.type.name).join(', ')
            }));
            displayPoke(pokemon);
        })
};
const displayPoke = (pokemon)=> {
    console.log(pokemon);
    const poke = pokemon.map ( pokeman => `
        <li class="card">
        <img class="card-image" src = "${pokeman.image}"/>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name} </h2>
        <p class="card-subtitle">Weight: ${pokeman.weight}</p>
        <p class="card-subtitle"> Height: ${pokeman.height}</p>
        <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `).join('')
    pokedox.innerHTML = poke;
}
detailPoke();