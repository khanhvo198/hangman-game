import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HangmanDrawing } from "./HangmanDrawing";
import { Word } from "./Word";
import { KeyBoard } from "./Keyboard";
import words from "./wordList.json";

function getWord(): string {
  return words[Math.floor(Math.random() * words.length) - 1];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [guessedLetters, setGuessedLetter] = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setGuessedLetter([...guessedLetters, e.key]);
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters]);

  const guessedLetter = useCallback(
    (letter: string) => {
      setGuessedLetter((currentGuessedLetters: string[]) => [
        ...currentGuessedLetters,
        letter,
      ]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key == "Enter") {
        setGuessedLetter([]);
        setWordToGuess(getWord);
      }
    };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, []);

  const inCorrectLetters: string[] = guessedLetters.filter(
    (letter: string) => !wordToGuess.includes(letter)
  );

  const correctLetters: string[] = guessedLetters.filter((letter: string) =>
    wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  console.log(wordToGuess);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        maxWidth: "800px",
      }}
    >
      <span>{isLoser ? "You Lose" : ""}</span>
      <span>{isWinner ? "You Win" : ""}</span>
      <HangmanDrawing numOfGuesses={inCorrectLetters.length} />
      <Word
        wordToGuess={wordToGuess}
        correctLetters={correctLetters}
        disabled={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard
          disabled={isLoser || isWinner || isWinner}
          guessedLetter={guessedLetter}
          inActiveLetters={inCorrectLetters}
          activeLetters={correctLetters}
        />
      </div>
    </div>
  );
}

export default App;
