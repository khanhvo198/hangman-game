import { FC, ReactElement } from "react";

interface wordProps {
  wordToGuess: string;
  correctLetters: string[];
  disabled: boolean;
}

export const Word: FC<wordProps> = ({
  wordToGuess,
  correctLetters,
  disabled,
}): ReactElement => {
  const inCompletedLetters = wordToGuess
    .split("")
    .filter((letter) => !correctLetters.includes(letter));

  return (
    <div
      style={{
        display: "flex",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily: "monospace",
        gap: "0.25em",
      }}
    >
      {wordToGuess.split("").map((word) => {
        const isVisible = correctLetters.includes(word);
        return (
          <span style={{ borderBottom: "7px solid black" }}>
            <span
              style={{
                visibility: `${isVisible || disabled ? "visible" : "hidden"}`,
                color: `${disabled && !isVisible ? "red" : "black"}`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
};
