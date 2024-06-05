# Ejercicio de Pokémon con Fetch

## Descripción del Ejercicio

Este ejercicio consiste en utilizar la API de Pokémon para obtener datos sobre varios Pokémon (Bulbasaur, Ivysaur, Charmander, Charmeleon, Squirtle y Wartortle) y mostrar sus imágenes y nombres en una página web. Al hacer clic en un botón, se oculta la imagen del Pokémon actual y se muestra la del siguiente en la línea de evolución.

### Funciones Principales

1. `fetchBulbasaurData(url)`: Realiza una solicitud fetch a la URL proporcionada para obtener los datos de Bulbasaur.
2. `handleBulbasaurData(responseJson)`: Procesa la respuesta JSON y actualiza la interfaz con la imagen y nombre de Bulbasaur.
3. `getBaseBulbasaur()`: Función principal que inicia el proceso de obtener y mostrar los datos de Bulbasaur.
4. `showPokemon(bulbasaurGif, bulbasaurName)`: Actualiza la interfaz para mostrar a Bulbasaur y agrega un botón para evolucionar a Ivysaur.
5. `getBaseIvysaur()`, `showIvysaur(ivysaurGif, ivysaurName)`, `getBaseCharmander()`, `showCharmander(charmanderGif, charmanderName)`, `getBaseCharmeleon()`, `showCharmeleon(charmeleonGif, charmeleonName)`, `getBaseSquirtle()`, `showSquirtle(squirtleGif, squirtleName)`, `getBaseWartortle()`, `showWartortle(wartortleGif, wartortleName)`: Funciones similares para obtener y mostrar datos de otros Pokémon.

## Pruebas

Las pruebas unitarias están diseñadas para verificar que:

1. Los datos de Bulbasaur se obtienen correctamente desde la API.
2. Los errores de fetch se manejan adecuadamente.
3. La función `handleBulbasaurData` procesa correctamente la respuesta JSON.
4. Las funciones de obtención de datos de otros Pokémon funcionan correctamente.
5. Los botones de evolución funcionan y ocultan al Pokémon actual para mostrar el siguiente.

### Pruebas con Jest

Las pruebas se encuentran en el archivo `index.test.js` y cubren los siguientes casos:

```javascript
// Importar la función a probar
const { fetchBulbasaurData, handleBulbasaurData } = require("./index");

// Mockear la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      sprites: {
        versions: {
          "generation-v": {
            "black-white": {
              animated: { front_default: "bulbasaur.gif" }
            }
          }
        }
      },
      forms: [{ name: "Bulbasaur" }]
    }),
  })
);

describe("fetchBulbasaurData", () => {
  it("should fetch Bulbasaur data from API", async () => {
    // Llamar a la función y esperar la respuesta
    const result = await fetchBulbasaurData(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    );

    // Verificar si la respuesta es la esperada
    expect(result).toEqual({
      sprites: {
        versions: {
          "generation-v": {
            "black-white": {
              animated: { front_default: "bulbasaur.gif" }
            }
          }
        }
      },
      forms: [{ name: "Bulbasaur" }]
    });
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

describe("handleBulbasaurData", () => {
  it("should process Bulbasaur data correctly", () => {
    const responseJson = {
      sprites: {
        versions: {
          "generation-v": {
            "black-white": {
              animated: { front_default: "bulbasaur.gif" }
            }
          }
        }
      },
      forms: [{ name: "Bulbasaur" }]
    };

    const result = handleBulbasaurData(responseJson);

    expect(result).toBe("Bulbasaur");
  });
});
