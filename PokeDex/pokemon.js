
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=60';
const pokemonDiv = document.getElementById('pokemon');
let offset = 0;
async function generate () {
    fetch(url)
        .then(response => response.json())
       .then(data => {
         // console.log(data);
          data.results.forEach(pokemon => {
             fetchPokemonData(pokemon);
            })
          })
}


document.getElementById('next').addEventListener("click", event => {
   pokemonDiv.innerHTML = '';
   offset += 60;
   fetch(`https://pokeapi.co/api/v2/pokemon?limit=60&offset=${offset}`)
        .then(response => response.json())
      .then(data => {
          data.results.forEach(pokemon => {
             fetchPokemonData(pokemon);
            })
          })
})

document.getElementById('previous').addEventListener("click", event => {
   pokemonDiv.innerHTML = '';
   if (offset <= 0) {
      offset = 0;
   } else {
      offset -= 60;
   }
   fetch(`https://pokeapi.co/api/v2/pokemon?limit=60&offset=${offset}`)
      .then(response => response.json())
      .then(data => {
         console.log(data)
         data.results.forEach(pokemon => {
            fetchPokemonData(pokemon);
         })
      })
})

async function fetchPokemonData(pokemon) {
   fetch(pokemon.url)
   .then(response => response.json())
      .then(data => {
        // console.log(data);
         const divCard = document.createElement('div');
         divCard.className = "pokemon-card";

         const ul = document.createElement('ul');
         ul.className = "ability-powers";
         const abilityHeader = document.createElement('p');
         abilityHeader.textContent = 'Abilities';
         for (let i = 0; i < data.abilities.length; i++) {
            //console.log(data.abilities[i].ability.name);
            let li = document.createElement('li')
            li.textContent = data.abilities[i].ability.name;
            ul.appendChild(li)
         };

         const imgDiv = document.createElement('div');
         imgDiv.className = "img-container";

         const pokeImg = document.createElement('img');
         pokeImg.setAttribute("src", data.sprites.other.dream_world.front_default);
         pokeImg.setAttribute("alt", data.species.name);

         imgDiv.appendChild(pokeImg);

         const detailsDiv = document.createElement('div');
         detailsDiv.className = "poke-details";

         const pName = document.createElement('p');
         pName.textContent = data.species.name;

         detailsDiv.appendChild(pName);
         detailsDiv.appendChild(abilityHeader)
         detailsDiv.appendChild(ul);

         divCard.appendChild(imgDiv);
         divCard.appendChild(detailsDiv)

         pokemonDiv.appendChild(divCard);
   })
}

// const buildPagination = (limit, offset) => {
//    pokemonDiv.innerHTML = '';
//    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
//             .then(response => response.json())
//             .then(data => {
//                console.log(data)
//                data.results.forEach(pokemon => {
//                   fetchPokemonData(pokemon);
//                })
//             })  
// }

// const buildBtns = () => {

//    const btnPages = document.getElementById('btnPages');
//    let offset = 0;
//    let limit = 0;
//    for (let i = 1; i < 19; i++) {
//       const button = document.createElement('button');
//       button.textContent = i;
//       //console.log(offset)
//       button.addEventListener('click', () => {
//          pokemonDiv.innerHTML = '';
         
//       })
//       button.className = 'pageButtons';
//       btnPages.appendChild(button)
//    }
// }





// buildBtns();
generate();

