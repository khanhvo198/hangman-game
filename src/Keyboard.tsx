import { FC } from "react";
import styles from "./KeyBoard.module.css";

interface KeyBoardProps {
  guessedLetter: (letter: string) => void;
  inActiveLetters: string[];
  activeLetters: string[];
  disabled: boolean;
}

export const KeyBoard: FC<KeyBoardProps> = ({
  guessedLetter,
  inActiveLetters,
  activeLetters,
  disabled,
}) => {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((letter) => {
        const isActive: boolean = activeLetters.includes(letter);
        const isInActive: boolean = inActiveLetters.includes(letter);

        return (
          <button
            style={{
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            onClick={() => guessedLetter(letter)}
            disabled={isInActive || disabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
