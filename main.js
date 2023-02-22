const url = "https://rickandmortyapi.com/api";
console.log(url);

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  }
}

fetchData();
