/*
OTO JS ASSESMENT TEST

!!!YOU CANNOT MODIFY THE HTML!!!
!!!YOU CANNOT MODIFY THE crossData ARRAY!!!

Goal:
Call the remote api below with albumId 10, decorate the results with crossData, and display the decorated response as shown below in the element with class album and attribute data-key 10 inside the container div.

Use whatever technology you want to reach the Goal

// API: 'https://jsonplaceholder.typicode.com/photos'
// Supported parameter: 'albumId'

<!-- Example output:
        
        <div class="entry">
          <h5>Mollitia Dolorem Qui</h5>
          <img src="https://placehold.it/150/e30072" alt="452">
          <h6>Campbell Soup by Andy Warhol</h6>
        </div>
-->

*/

var crossData = [
  {
    id: 451,
    title: "Guernica",
    author: "Picasso",
  },
  {
    id: 452,
    title: "Campbell Soup",
    author: "Andy Warhol",
  },
  {
    id: 455,
    title: "Night Watch",
    author: "Rembrandt",
  },
  {
    id: 472,
    title: "The Scream",
    author: "Edvard Munch",
  },
  {
    id: 496,
    title: "Olympia",
    author: "Edouard Manet",
  },
  {
    id: 505,
    title: "The Kiss",
    author: "Klimt",
  },
];

// your code goes BELOW

const element = document.querySelector('[data-key="10"]');

const getData = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=10"
  );
  const json = await data.json();
  element.innerHTML = `<h5>${json[0].title}</h5>
<img src=${json[0].thumbnailUrl} alt=${crossData[0].id}>
<h6>${crossData[0].title} by ${crossData[0].author}</h6>`;
};

getData();
