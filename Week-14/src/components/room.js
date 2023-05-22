import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Room = () => {
  const lightedness = useSelector((state) => state.lightedness);
  const dispatch = useDispatch();

  const flipLight = () => {
    lightedness ? dispatch({ type: "DARK" }) : dispatch({ type: "LIGHT" });
  };

  return (
    <div className={`room ${lightedness ? "lit" : "dark"}`}>
      the room is {lightedness ? "Light" : "Dark"}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
};

export default Room;
