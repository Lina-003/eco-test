// Importar las funciones a probar
const {
  fetchBulbasaurData,
  fetchCharmanderData,
  fetchSquirtleData,
  fetchIvysaurData,
} = require("./index");

// Describe de fetchBulbasaurData
describe("fetchBulbasaurData", () => {
  // Mock de fetch para Bulbasaur
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.includes("bulbasaur")) {
        return Promise.resolve({
          json: () => Promise.resolve({ data: "Bulbasaur data" }),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });
  });

  it("should fetch Bulbasaur data from API", async () => {
    // Llamar a la función y esperar la respuesta
    const result = await fetchBulbasaurData(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    );

    // Verificar si la respuesta es la esperada
    expect(result).toEqual({ data: "Bulbasaur data" });
  });

  it("should handle fetch errors", async () => {
    // Mockear la función fetch para que retorne un error
    global.fetch = jest.fn(() => Promise.reject(new Error("Fetch error")));

    // Esperar que la función arroje un error
    await expect(
      fetchBulbasaurData("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    ).rejects.toThrow("Failed to fetch Bulbasaur data: Fetch error");
  });
});

// Describe de fetchCharmanderData
describe("fetchCharmanderData", () => {
  // Mock de fetch para Charmander
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.includes("charmander")) {
        return Promise.resolve({
          json: () => Promise.resolve({ data: "Charmander data" }),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });
  });

  it("should fetch Charmander data from API", async () => {
    // Llamar a la función y esperar la respuesta
    const result = await fetchCharmanderData(
      "https://pokeapi.co/api/v2/pokemon/charmander"
    );

    // Verificar si la respuesta es la esperada
    expect(result).toEqual({ data: "Charmander data" });
  });

  it("should handle fetch errors", async () => {
    // Mockear la función fetch para que retorne un error
    global.fetch = jest.fn(() => Promise.reject(new Error("Fetch error")));

    // Esperar que la función arroje un error
    await expect(
      fetchCharmanderData("https://pokeapi.co/api/v2/pokemon/charmander")
    ).rejects.toThrow("Failed to fetch Charmander data: Fetch error");
  });
});

// Describe de fetchSquirtleData
describe("fetchSquirtleData", () => {
  // Mock de fetch para Squirtle
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.includes("squirtle")) {
        return Promise.resolve({
          json: () => Promise.resolve({ data: "Squirtle data" }),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });
  });

  it("should fetch Squirtle data from API", async () => {
    // Llamar a la función y esperar la respuesta
    const result = await fetchSquirtleData(
      "https://pokeapi.co/api/v2/pokemon/squirtle"
    );

    // Verificar si la respuesta es la esperada
    expect(result).toEqual({ data: "Squirtle data" });
  });

  it("should handle fetch errors", async () => {
    // Mockear la función fetch para que retorne un error
    global.fetch = jest.fn(() => Promise.reject(new Error("Fetch error")));

    // Esperar que la función arroje un error
    await expect(
      fetchSquirtleData("https://pokeapi.co/api/v2/pokemon/squirtle")
    ).rejects.toThrow("Failed to fetch Squirtle data: Fetch error");
  });
});

// Describe de fetchIvysaurData
describe("fetchIvysaurData", () => {
  // Mock de fetch para Ivysaur
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.includes("ivysaur")) {
        return Promise.resolve({
          json: () => Promise.resolve({ data: "Ivysaur data" }),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });
  });

  it("should fetch Ivysaur data from API", async () => {
    // Llamar a la función y esperar la respuesta
    const result = await fetchIvysaurData(
      "https://pokeapi.co/api/v2/pokemon/ivysaur"
    );

    // Verificar si la respuesta es la esperada
    expect(result).toEqual({ data: "Ivysaur data" });
  });

  it("should handle fetch errors", async () => {
    // Mockear la función fetch para que retorne un error
    global.fetch = jest.fn(() => Promise.reject(new Error("Fetch error")));

    // Esperar que la función arroje un error
    await expect(
      fetchIvysaurData("https://pokeapi.co/api/v2/pokemon/ivysaur")
    ).rejects.toThrow("Failed to fetch Ivysaur data: Fetch error");
  });
});
