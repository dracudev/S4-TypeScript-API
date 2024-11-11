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
    const bloobArray = [
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M900.5 623.5Q840 747 738 832t-239.5 90q-137.5 5-235-87T86 621.5Q6 500 65.5 363.5t170-236.5Q346 27 495.5 40.5t275 93q125.5 79.5 158 223t-28 267Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M900.5 623.5Q840 747 738 832t-239.5 90q-137.5 5-235-87T86 621.5Q6 500 65.5 363.5t170-236.5Q346 27 495.5 40.5t275 93q125.5 79.5 158 223t-28 267Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M926 639.5Q884 779 768 873t-266.5 90.5Q351 960 248 859T83 629q-62-129-.5-258.5t164-233Q349 34 495 50t238.5 114.5Q826 263 897 381.5t29 258Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M926 639.5Q884 779 768 873t-266.5 90.5Q351 960 248 859T83 629q-62-129-.5-258.5t164-233Q349 34 495 50t238.5 114.5Q826 263 897 381.5t29 258Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M879 618.5q-53 118.5-144.5 221t-229 84Q368 905 259 830T77 627.5Q4 500 61 361t177.5-217.5Q359 65 504 53t257 82q112 94 141.5 229.5t-23.5 254Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M879 618.5q-53 118.5-144.5 221t-229 84Q368 905 259 830T77 627.5Q4 500 61 361t177.5-217.5Q359 65 504 53t257 82q112 94 141.5 229.5t-23.5 254Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M924 646.5Q903 793 774.5 871T504 936.5Q362 924 256.5 839t-169-212Q24 500 74 363.5T250 173q126-54 256-73.5T743 163q107 83 154.5 210T924 646.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M924 646.5Q903 793 774.5 871T504 936.5Q362 924 256.5 839t-169-212Q24 500 74 363.5T250 173q126-54 256-73.5T743 163q107 83 154.5 210T924 646.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M915.5 645.5Q900 791 775.5 878t-263 48q-138.5-39-241-112T116 620.5Q63 500 115 379t144-229.5Q351 41 489.5 73T765 156.5Q902 208 916.5 354t-1 291.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M915.5 645.5Q900 791 775.5 878t-263 48q-138.5-39-241-112T116 620.5Q63 500 115 379t144-229.5Q351 41 489.5 73T765 156.5Q902 208 916.5 354t-1 291.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M890 633.5q-23 133.5-144 192T499 887q-126 3-262.5-47T91 645q-9-145 25.5-272t138-218Q358 64 502 57t243.5 93Q845 250 879 375t11 258.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M890 633.5q-23 133.5-144 192T499 887q-126 3-262.5-47T91 645q-9-145 25.5-272t138-218Q358 64 502 57t243.5 93Q845 250 879 375t11 258.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M883.5 627q-33.5 127-146 192T494 903q-131 19-249.5-56T72 636Q18 500 61 356t176.5-199Q371 102 511 68.5T773 124q122 89 133 232.5T883.5 627Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M883.5 627q-33.5 127-146 192T494 903q-131 19-249.5-56T72 636Q18 500 61 356t176.5-199Q371 102 511 68.5T773 124q122 89 133 232.5T883.5 627Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M943.5 641q-55.5 141-182 208.5t-256 50.5q-129.5-17-244-80t-169-191.5q-54.5-128.5 12-248t157-227.5Q352 45 502.5 36.5T746 141q93 113 173 236t24.5 264Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%238a36a3%22 d=%22M943.5 641q-55.5 141-182 208.5t-256 50.5q-129.5-17-244-80t-169-191.5q-54.5-128.5 12-248t157-227.5Q352 45 502.5 36.5T746 141q93 113 173 236t24.5 264Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")'
    ];
    fetchJokes().then((jokes) => {
        if (jokes[0] && jokes[1] && jokes[2]) {
            let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
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
            let randomBloob = Math.floor(Math.random() * bloobArray.length);
            const body = document.getElementById("body");
            if (body) {
                body.style.backgroundImage = bloobArray[randomBloob];
            }
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
