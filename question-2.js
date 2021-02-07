const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

container = document.querySelector(".results");

async function urlCall() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const games = data.results;

    container.innerhtml = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      container.innerHTML += `<div class="result">Name: ${games[i].name}</br>Rating: ${games[i].rating}</br>Tags: ${games[i].tags.length}</div>`;
    }
  } catch (error) {
    console.log(`An error occured`);
    container.innerHTML = `An error occured`;
  }
}

urlCall();
