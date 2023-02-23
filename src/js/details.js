/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66

============================================
*/
const charNameHolder = document.querySelector("#char-name-holder");

const queryString = document.location.search;
console.log("query string ::::" + queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log("id ::::" + id);

const url = `https://rickandmortyapi.com/api/character/?id=${id}`;
console.log("url ::::" + url);

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results[id - 1];

    console.log("data..." + results.name);

    makeHTML(results);
  } catch (error) {
    console.warn(error + "error");
  }
}

function makeHTML(details) {
//   charNameHolder.innerHTML = details.name;
  charNameHolder.innerHTML = "fuuyuuuuck";
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

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
