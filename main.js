const cardContainer = document.querySelector("main");

const btnReload = document.querySelector(".boton-actualizar");

const BASE_URL = "https://finalspaceapi.com/api/v0/character/";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 47) + 1;
};

const getPj = async () => {
  try {
    const newPj = await fetch(`${BASE_URL}${getRandomNumber()}`).then((res) =>
      res.json()
    );
    console.log(newPj);
    return newPj;
  } catch (error) {
    console.log(error);
    cardContainer.innerHTML = `
        <h1>ROMPIMOS TODO....</h1>
    `;
  }
};

const renderNewPj = (character) => {
  const { img_url, name, species, origin, id } = character;
  cardContainer.innerHTML = `
      <div class="card-fs" id=${id}>
        <div class="imgContainer">
          <img src="${img_url}" alt="fotitofs" />
        </div>
        <div class="info-container">
          <h1>${name}</h1>
          <div class="info">
            <h2>tipo de especie:</h2>
            <span>${species}</span>
          </div>
          <div class="info">
            <h2>origen:</h2>
            <span>${origin}</span>
          </div>
        </div>
      </div>
    //    <button class="boton-actualizar" onclick="location.reload()">Actualizar Personaje</button>
`;
};
const getAndRenderPj = async () => {
  cardContainer.innerHTML = `
        <h1>CARGANDO....</h1>
    `;
  const pj = await getPj();
  renderNewPj(pj);
};

const init = () => {
  window.addEventListener("DOMContentLoaded", getAndRenderPj);
};

init();
