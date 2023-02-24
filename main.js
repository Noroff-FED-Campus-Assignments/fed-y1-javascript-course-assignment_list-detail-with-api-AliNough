const contentHolder = document.querySelector("#js-content-holder");
const charStatus = document.querySelector("#js-status");
const keyInput = document.querySelector("#js-key-input");
const minEpInput = document.querySelector("#js-min-ep-input");
const epValueHolder = document.querySelector("#js-ep-in-value-disp");
const epSubmitBtn = document.querySelector("#js-ep-submit-btn");
// console.log(charStatus);

const url = "https://rickandmortyapi.com/api/character";
console.log(url);

keyInput.addEventListener("keyup", (e) => {
  fetchData(keyInput.value, charStatus.value);
});

charStatus.addEventListener("change", function () {
  fetchData(keyInput.value, this.value);
  console.log(charStatus.value);
});
minEpInput.addEventListener("change", (e) => {
  console.log(minEpInput.value);
  epValueHolder.innerHTML = minEpInput.value;
  fetchData(keyInput.value, charStatus.value, minEpInput.value);
});

// epSubmitBtn.addEventListener("click", (e) => {});

async function fetchData(keyInput, charStatus, epInput = "") {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // console.log(charStatus);
    console.log(epInput);

    const dataResults = data.results;
    // console.log("data results>>>>" + dataResults);

    const filteredContent = dataResults.filter(function (cont) {
      if (!charStatus && !epInput) {
        return cont;
      } else if (charStatus !== "all") {
        return (
          cont.status.toLowerCase() === charStatus.toLowerCase() &&
          cont.name.toLowerCase().includes(keyInput.toLowerCase())
        );
      }
      return cont.name.toLowerCase().includes(keyInput.toLowerCase());
    });

    contentHolder.innerHTML = "";

    // console.log("filtered content >>>>" + filteredContent);

    filteredContent.forEach((contIN) => {
      contentHolder.innerHTML += `
      <a href="/details.html?id=${contIN.id}" class="cont-holder">
          <img src="${contIN.image}" class="cont-img"></img>
          <h3><span class="label-tag">ID:</span>  ${contIN.id}</h3>
          <h3><span class="label-tag">Name:</span>  ${contIN.name}</h3>
      </a>
      `;
    });
  } catch (error) {
    contentHolder.innerHTML = `
    <div href="" class="cont-holder">
          <h1 src="" class="cont-img"> no content found</h1>
      </div>`;
    console.log("error");
  }
}
fetchData();
