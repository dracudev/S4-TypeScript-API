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
    function fetchDadJoke() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://icanhazdadjoke.com/", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
                const data = yield response.json();
                return data;
            }
            catch (error) {
                console.error("Error fetching joke:", error);
                return null;
            }
        });
    }
    const button1 = document.querySelector(".joke-button");
    const jokeContainer = document.querySelector(".container-joke");
    fetchDadJoke().then((joke) => {
        if (joke) {
            displayJoke(joke.joke);
            reportJokes(joke.joke);
        }
        else {
            console.log("Error fetching joke.");
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
        const joke = yield fetchDadJoke();
        if (joke) {
            displayJoke(joke.joke);
            reportJokes(joke.joke);
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
});
