// Importar la función a probar
const { fetchBulbasaurData } = require("./index");

// Mockear la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "Bulbasaur data" }),
  })
);

describe("fetchBulbasaurData", () => {
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
