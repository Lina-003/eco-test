function fetchBulbasaurData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Failed to fetch Bulbasaur data: " + error.message);
    });
}

function fetchCharmanderData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Failed to fetch Charmander data: " + error.message);
    });
}

function fetchSquirtleData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Failed to fetch Squirtle data: " + error.message);
    });
}

function fetchIvysaurData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Failed to fetch Ivysaur data: " + error.message);
    });
}

function handleBulbasaurData(responseJson) {
  const bulbasaurGif =
    responseJson.sprites.versions["generation-v"]["black-white"].animated
      .front_default;
  const bulbasaurName = responseJson.forms[0].name;

  showPokemon(bulbasaurGif, bulbasaurName);
  return bulbasaurName;
}

function getBaseBulbasaur() {
  const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  return fetchBulbasaurData(url)
    .then(handleBulbasaurData)
    .catch((error) => error);
}

function showPokemon(bulbasaurGif, bulbasaurName) {
  const bulbasaur = document.querySelector(".Bulbasaur");
  bulbasaur.innerHTML = `
    <div class="Bulbasaur">
        <img src="${bulbasaurGif}" alt="Bulbasaur">
        <h3>${bulbasaurName}</h3>
        <div class="Button">
            <button id="btn-1"> Evolución Bulbasaur </button>
        </div>
    </div>
    `;
  document.querySelector("#btn-1").addEventListener("click", function () {
    bulbasaur.style.display = "none";

    getBaseIvysaur();
  });
}

function getBaseIvysaur() {
  const url = "https://pokeapi.co/api/v2/pokemon/ivysaur";

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const ivysaurGif =
        responseJson.sprites.versions["generation-v"]["black-white"].animated
          .front_default;
      const ivysaurName = responseJson.forms[0].name;

      showIvysaur(ivysaurGif, ivysaurName);
      console.log(ivysaurName);
    })
    .catch((error) => error);
}

function showIvysaur(ivysaurGif, ivysaurName) {
  var ivysaur = document.querySelector(".Ivysaur");
  ivysaur.innerHTML = `
      <div class="Ivysaur">
          <img src="${ivysaurGif}" alt="Ivysaur">
          <h3>${ivysaurName}</h3>
          <div class="Button">
              <button> Evolución Ivysaur </button>
          </div>
      </div>
      `;
}

function getBaseCharmander() {
  const url = "https://pokeapi.co/api/v2/pokemon/charmander";

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const charmanderGif =
        responseJson.sprites.versions["generation-v"]["black-white"].animated
          .front_default;
      const charmanderName = responseJson.forms[0].name;

      showCharmander(charmanderGif, charmanderName);
      console.log(charmanderName);
    })
    .catch((error) => error);
}

function showCharmander(charmanderGif, charmanderName) {
  const charmander = document.querySelector(".Charmander");
  charmander.innerHTML = `
    <div class="Charmander">
        <img src="${charmanderGif}" alt="Charmander">
        <h3>${charmanderName}</h3>
        <div class="Button">
            <button id="btn-2"> Evolución Charmander </button>
        </div>
    </div>
    `;

  document.querySelector("#btn-2").addEventListener("click", function () {
    charmander.style.display = "none";

    getBaseCharmeleon();
  });
}

function getBaseCharmeleon() {
  const url = "https://pokeapi.co/api/v2/pokemon/charmeleon";

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const charmeleonGif =
        responseJson.sprites.versions["generation-v"]["black-white"].animated
          .front_default;
      const charmeleonName = responseJson.forms[0].name;

      showCharmeleon(charmeleonGif, charmeleonName);
      console.log(charmeleonName);
    })
    .catch((error) => error);
}

function showCharmeleon(charmeleonGif, charmeleonName) {
  const charmeleon = document.querySelector(".Charmeleon");
  charmeleon.innerHTML = `
      <div class="Charmileon">
          <img src="${charmeleonGif}" alt="Charmileon">
          <h3>${charmeleonName}</h3>
          <div class="Button">
              <button> Evolución Charmeleon </button>
          </div>
      </div>
      `;
}

function getBaseSquirtle() {
  const url = "https://pokeapi.co/api/v2/pokemon/squirtle";

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const squirtleGif =
        responseJson.sprites.versions["generation-v"]["black-white"].animated
          .front_default;
      const squirtleName = responseJson.forms[0].name;

      showSquirtle(squirtleGif, squirtleName);
      console.log(squirtleName);
    })
    .catch((error) => error);
}

function showSquirtle(squirtleGif, squirtleName) {
  const squirtle = document.querySelector(".Squirtle");
  squirtle.innerHTML = `
    <div class="Squirtle">
        <img src="${squirtleGif}" alt="Squirtle">
        <h3>${squirtleName}</h3>
        <div class="Button">
            <button id="btn-3"> Evolución Squirtle </button>
        </div>
    </div>
    `;

  document.querySelector("#btn-3").addEventListener("click", function () {
    squirtle.style.display = "none";

    getBaseWartortle();
  });
}

function getBaseWartortle() {
  const url = "https://pokeapi.co/api/v2/pokemon/wartortle";

  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("response ->", responseJson);
      const wartortleGif =
        responseJson.sprites.versions["generation-v"]["black-white"].animated
          .front_default;
      const wartortleName = responseJson.forms[0].name;

      showWartortle(wartortleGif, wartortleName);
      console.log(wartortleName);
    })
    .catch((error) => error);
}

function showWartortle(wartortleGif, wartortleName) {
  const wartotle = document.querySelector(".Wartotle");
  wartotle.innerHTML = `
      <div class="Wartotle">
          <img src="${wartortleGif}" alt="Wartotle">
          <h3>${wartortleName}</h3>
          <div class="Button">
              <button> Evolución Wartortle </button>
          </div>
      </div>
      `;
}

console.log("Corrió");

getBaseBulbasaur();
getBaseCharmander();
getBaseSquirtle();

module.exports = {
  fetchBulbasaurData,
  fetchCharmanderData,
  fetchSquirtleData,
  fetchIvysaurData,
};
