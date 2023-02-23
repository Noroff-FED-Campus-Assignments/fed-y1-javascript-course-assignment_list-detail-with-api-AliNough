const contentHolder = document.querySelector("#js-content-holder");

const url = "https://rickandmortyapi.com/api/character";
console.log(url);

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const dataResults = data.results;
    console.log(dataResults);

    contentHolder.innerHTML = "";

    dataResults.forEach((contIN) => {
      contentHolder.innerHTML += `
      <a href="/details.html?id=${contIN.id}" class="cont-holder">
          <img src="${contIN.image}" class="cont-img"></img>
          <h3><span class="label-tag">Name:</span>  ${contIN.name}</h3>
      </a>
      `;
    });
  } catch (error) {
    console.log("error");
  }
}

fetchData();
