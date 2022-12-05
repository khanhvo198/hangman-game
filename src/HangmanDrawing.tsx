import { FC } from "react";

interface HangmanDrawingProps {
  numOfGuesses: number;
}

export const HangmanDrawing: FC<HangmanDrawingProps> = ({ numOfGuesses }) => {
  const RIGHT_LEG = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: -10,
        transform: "rotate(160deg)",
        transformOrigin: "left bottom",
      }}
    ></div>
  );

  const LEFT_LEG = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: 10,
        transform: "rotate(-160deg)",
        transformOrigin: "right bottom",
      }}
    ></div>
  );

  const RIGHT_ARM = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: 70,
        right: 0,
        transform: "rotate(-60deg)",
        transformOrigin: "bottom right",
      }}
    ></div>
  );

  const LEFT_ARM = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        transform: "rotate(60deg)",
        top: 70,
        right: 0,
        transformOrigin: "bottom left",
      }}
    ></div>
  );
  const BODY = (
    <div
      style={{
        width: "10px",
        height: "150px",
        background: "black",
        position: "absolute",
        top: 110,
        right: 0,
      }}
    ></div>
  );

  const HEAD = (
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "10px solid black",
        borderRadius: "100%",
        position: "absolute",
        top: 50,
        right: -30,
      }}
    />
  );

  const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numOfGuesses)}
      <div
        style={{
          width: "10px",
          height: "50px",
          background: "black",
          top: 0,
          right: 0,
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ width: "250px", height: "10px", background: "black" }}
      ></div>
    </div>
  );
};
