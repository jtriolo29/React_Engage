import React from "react";
import ButtonBox from "./ButtonBox";
import DisplayScreen from "./DisplayScreen";
import { useState } from "react";

export default function Calculator() {
  const [exprString, setExprString] = useState("");
  const [displayResult, setDisplayResult] = useState("");

  return (
    <div>
      <DisplayScreen 
        numberString={exprString} 
        result={displayResult} />
      <ButtonBox
        getNumberString={setExprString}
        getResult={setDisplayResult}
      />
    </div>
  );
}
