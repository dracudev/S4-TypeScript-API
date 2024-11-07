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

const button = document.querySelector(".joke-button");
const jokeContainer = document.querySelector(".container-joke");

fetchDadJoke().then((joke) => {
  if (joke) {
    displayJoke(joke.joke);
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

button?.addEventListener("click", async (e) => {
  e.preventDefault();
  const joke = await fetchDadJoke();
  if (joke) {
    displayJoke(joke.joke);
  }
});