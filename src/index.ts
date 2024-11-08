document.addEventListener("DOMContentLoaded", () => {

interface DadJoke {
  id: string;
  joke: string;
  status: number;
}

async function fetchDadJoke(): Promise<DadJoke | null> {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data: DadJoke = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return null;
  }
}

const button1 = document.querySelector(".joke-button");
const jokeContainer = document.querySelector(".container-joke");

fetchDadJoke().then((joke) => {
  if (joke) {
    displayJoke(joke.joke);
    reportJokes(joke.joke);
  } else {
    console.log("Error fetching joke.");
  }
});

function displayJoke(jokeText: string) {
  jokeContainer!.innerHTML = "";
  const jokeDiv = document.createElement("div");
  const jokeElement = document.createElement("p");

  jokeElement.textContent = jokeText;
  jokeDiv.appendChild(jokeElement);
  jokeContainer?.appendChild(jokeDiv);
}

button1?.addEventListener("click", async (e) => {
  e.preventDefault();
  const joke = await fetchDadJoke();
  if (joke) {
    displayJoke(joke.joke);
    reportJokes(joke.joke);
  }
});

const badButton = document.querySelector(".bad-button");
const neutralButton = document.querySelector(".neutral-button");
const goodButton = document.querySelector(".good-button");

interface jokeReport{
  joke: string,
  score: number,
  date: string
}
let jokeInfo: jokeReport[] = [];

function reportJokes(jokeText: string) {
  let newReport = {
    joke: jokeText,
    score: 0,
    date: new Date().toISOString()
  }

  jokeInfo.push(newReport);
  console.log(jokeInfo)
}

badButton?.addEventListener("click", (e) => {
  e.preventDefault();
  if (jokeInfo.length > 0) {
    jokeInfo[jokeInfo.length - 1].score = 1;
    console.log(jokeInfo)
  }
})

neutralButton?.addEventListener("click", (e) => {
  e.preventDefault();
  if (jokeInfo.length > 0) {
    jokeInfo[jokeInfo.length - 1].score = 2;
    console.log(jokeInfo)
  }
})

goodButton?.addEventListener("click", (e) => {
  e.preventDefault();
  if (jokeInfo.length > 0) {
    jokeInfo[jokeInfo.length - 1].score = 3;
    console.log(jokeInfo)
  }
})

})