import React from "react";

export default function Button({ buttonChar, buttonStyle, handleClick }) {
  return (
    <button
      className={buttonStyle}
      onClick={() => handleClick(`${buttonChar}`)}
    >
      {buttonChar}
    </button>
  );
}
