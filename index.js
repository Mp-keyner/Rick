document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const datosContainer = document.getElementById("Datos");
  const btnScrollToTop = document.getElementById("btnScrollToTop");
  const loadMoreButton = document.getElementById("loadMoreButton");
  const loadLessButton = document.getElementById("loadLessButton"); // Agregado el botón de cargar menos
  const nava = document.getElementById("nava"); // Agregado el botón de cargar menos
  const mode = document.getElementById("mode"); // Agregado el botón de cargar menos
  const body = document.getElementById("body"); // Agregado el botón de cargar menos
  const root = document.documentElement;
  let esColor1 = true;
 
  let currentPage = 1;
  const charactersPerPage = 20;

  // mode.addEventListener("click", () => {
  //   console.log("object")
  //   root.style.setProperty('--bg-main', 'purple');
  //   root.style.setProperty('--bg-main', '#3ab54a');
  // })



mode.addEventListener('click', () => {
  if (esColor1) {
    root.style.setProperty('--bg-main-body', '#fff');
    root.style.setProperty('--bg-main-text', '#000');
  } else {
    root.style.setProperty('--bg-main-body', '#000');
    root.style.setProperty('--bg-main-text', '#fff');
  }
  esColor1 = !esColor1;
});


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
    console.log(page)
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
    nava.scrollIntoView({ behavior: 'smooth' });
  });

  loadLessButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      obtenerYMostrarPersonajes(currentPage);
    }
    nava.scrollIntoView({ behavior: 'smooth' });
  });

  obtenerYMostrarPersonajes(currentPage);

  btnScrollToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
