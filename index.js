document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const datosContainer = document.getElementById("Datos");
  const btnScrollToTop = document.getElementById("btnScrollToTop");
  const loadMoreButton = document.getElementById("loadMoreButton");
  const loadLessButton = document.getElementById("loadLessButton"); // Agregado el botón de cargar menos

  let currentPage = 1;
  const charactersPerPage = 20;

  function mostrarPersonajes(personajes) {
    datosContainer.innerHTML = "";

    personajes.forEach((character) => {
      const characterDiv = document.createElement("div");
      characterDiv.className = "character";

      const characterDivleft = document.createElement("div");
      characterDivleft.className = "characterLeft";

      const characterDivContainer = document.createElement("div");
      characterDivContainer.className = "characterContainer";

      const characterName = document.createElement("h2");
      characterName.textContent =
        character.name.length > 12
          ? character.name.substring(0, 11) + ".."
          : character.name;

      const characterImage = document.createElement("img");
      characterImage.src = character.image;
      characterImage.alt = character.name;

      const characterStatus = document.createElement("p");
      characterStatus.textContent = `Status: ${character.status}`;

      const characterspecies = document.createElement("p");
      characterspecies.textContent = `species: ${character.species}`;

      const charactergender = document.createElement("p");
      charactergender.textContent = `gender: ${character.gender}`;

      characterDivleft.appendChild(characterName);
      characterDivleft.appendChild(characterImage);
      characterDivContainer.appendChild(characterStatus);
      characterDivContainer.appendChild(characterspecies);
      characterDivContainer.appendChild(charactergender);
      characterDiv.appendChild(characterDivleft);
      characterDiv.appendChild(characterDivContainer);

      datosContainer.appendChild(characterDiv);
    });
  }

  function obtenerYMostrarPersonajes(page) {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const personajes = data.results;
        mostrarPersonajes(personajes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.trim() !== "") {
      fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((data) => {
          const personajes = data.results;
          const resultadosFiltrados = personajes.filter((character) =>
            character.name.toLowerCase().includes(searchTerm)
          );
          mostrarPersonajes(resultadosFiltrados);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      obtenerYMostrarPersonajes(currentPage);
    }
  });

  loadMoreButton.addEventListener("click", () => {
    currentPage++;
    obtenerYMostrarPersonajes(currentPage);
  });

  loadLessButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      obtenerYMostrarPersonajes(currentPage);
    }
  });

  obtenerYMostrarPersonajes(currentPage);

  btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
