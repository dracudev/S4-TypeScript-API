interface DadJoke {
    id: string;
    joke: string;
    status: number;
}
declare function fetchDadJoke(): Promise<DadJoke | null>;
declare const button: Element | null;
declare const jokeContainer: Element | null;
declare function displayJoke(jokeText: string): void;
