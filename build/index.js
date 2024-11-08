"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    function fetchJokes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [joke1, joke2, joke3] = yield Promise.all([
                    fetch("https://icanhazdadjoke.com/", {
                        method: "GET",
                        headers: {
                            "Accept": "application/json",
                        },
                    }).then((response) => {
                        if (!response.ok) {
                            throw new Error("Error fetching dad joke.");
                        }
                        return response.json();
                    }),
                    fetch("https://api.chucknorris.io/jokes/random", {
                        method: "GET",
                    }).then((response) => {
                        if (!response.ok) {
                            throw new Error("Error fetching norris joke.");
                        }
                        return response.json();
                    }),
                    fetch("https://v2.jokeapi.dev/joke/Any?type=single", {
                        method: "GET",
                    }).then((response) => {
                        if (!response.ok) {
                            throw new Error("Error fetching black joke.");
                        }
                        return response.json();
                    }),
                ]);
                return [joke1.joke, joke2.value, joke3.joke];
            }
            catch (error) {
                console.error("Error fetching jokes:", error);
                return [];
            }
        });
    }
    const button1 = document.querySelector(".joke-button");
    const jokeContainer = document.querySelector(".container-joke");
    fetchJokes().then((jokes) => {
        if (jokes[0] && jokes[1] && jokes[2]) {
            let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            console.log(jokes[2]);
            displayJoke(randomJoke);
            reportJokes(randomJoke);
        }
        else {
            console.log("Error fetching jokes.");
        }
    });
    function displayJoke(jokeText) {
        jokeContainer.innerHTML = "";
        const jokeDiv = document.createElement("div");
        const jokeElement = document.createElement("p");
        jokeElement.textContent = jokeText;
        jokeDiv.appendChild(jokeElement);
        jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.appendChild(jokeDiv);
    }
    button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const jokes = yield fetchJokes();
        if (jokes[0] && jokes[1] && jokes[2]) {
            let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            displayJoke(randomJoke);
            reportJokes(randomJoke);
        }
    }));
    const badButton = document.querySelector(".bad-button");
    const neutralButton = document.querySelector(".neutral-button");
    const goodButton = document.querySelector(".good-button");
    let jokeInfo = [];
    function reportJokes(jokeText) {
        let newReport = {
            joke: jokeText,
            score: 0,
            date: new Date().toISOString()
        };
        jokeInfo.push(newReport);
        console.log(jokeInfo);
    }
    badButton === null || badButton === void 0 ? void 0 : badButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (jokeInfo.length > 0) {
            jokeInfo[jokeInfo.length - 1].score = 1;
            console.log(jokeInfo);
        }
    });
    neutralButton === null || neutralButton === void 0 ? void 0 : neutralButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (jokeInfo.length > 0) {
            jokeInfo[jokeInfo.length - 1].score = 2;
            console.log(jokeInfo);
        }
    });
    goodButton === null || goodButton === void 0 ? void 0 : goodButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (jokeInfo.length > 0) {
            jokeInfo[jokeInfo.length - 1].score = 3;
            console.log(jokeInfo);
        }
    });
    function fetchWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://open-weather13.p.rapidapi.com/city/barcelona/EN", {
                    method: "GET",
                    headers: {
                        'x-rapidapi-key': '9b14e42508msh10571fa889ce0d8p134076jsn97763d7d4fd0',
                        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
                const data = yield response.json();
                return data;
            }
            catch (error) {
                console.error("Error fetching weather:", error);
                return null;
            }
        });
    }
    fetchWeather().then((data) => {
        if (data) {
            displayWeather(data.weather[0].main, data.main.temp, data.weather[0].icon);
        }
        else {
            console.log("Error fetching weather.");
        }
    });
    function displayWeather(condition, temp, image) {
        let conditionText = document.querySelector(".condition");
        let tempText = document.querySelector(".temp");
        let conditionImage = document.querySelector(".condition-image");
        if (conditionImage) {
            conditionImage.src = `https://openweather.site/img/wn/${image}.png`;
        }
        if (!conditionImage && conditionText) {
            conditionText.textContent = condition;
        }
        if (tempText) {
            tempText.textContent = ((temp - 32) * 5 / 9).toFixed(1).toString() + " ºC";
        }
    }
});
