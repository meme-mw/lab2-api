let container=document.querySelector('.container');

async function chars() {
    
const response=await fetch('https://rickandmortyapi.com/api/character');
const chars=await response.json();

chars.results.map((e)=>container.innerHTML+=` <div class="card" style="width: 10rem;">
        <img class="card-img-top" src=${e.image} alt="Card image cap">
        <div class="card-body"><h5 class="card-title">${e.name}</h5> </div>
      </div>`);

}

chars();