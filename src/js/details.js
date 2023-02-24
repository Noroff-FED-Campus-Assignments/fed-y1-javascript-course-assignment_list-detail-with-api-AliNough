/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66

============================================
*/
const charNameHolder = document.querySelector("#js-char-name");
const pageTitle = document.querySelector("title");
const contentHolder = document.querySelector("#js-det-cont-holder");

const queryString = document.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");

const url = "https://rickandmortyapi.com/api/character/" + id;

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    makeHTML(data);
  } catch (error) {
    contentHolder.innerHTML = `
    <h3>No Content Found</h3>`;
    console.warn(error + "error");
  }
}

function makeHTML(details) {
  contentHolder.innerHTML = "";
  console.log(details.name);
  charNameHolder.innerHTML = details.name;
  pageTitle.innerHTML = "Rick And Morty | " + details.name;
  contentHolder.innerHTML = `
          <img src="${details.image}" class="det-img"></img>
          <div class="label-tag-container">
            <h3><span class="det-label-tag">Name:</span> ${details.name}</h3>
            <h3><span class="det-label-tag">Status:</span> ${details.status}</h3>
            <h3><span class="det-label-tag">species:</span> ${details.species}</h3>
            <h3><span class="det-label-tag">Episodes:</span> ${details.episode.length}</h3>
          </div>
  `;
}

getData();

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

// /**
//  * TODO: Create a function to create a DOM element.
//  * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
//  * @param {item} item The object with properties from the fetched JSON data.
//  */
