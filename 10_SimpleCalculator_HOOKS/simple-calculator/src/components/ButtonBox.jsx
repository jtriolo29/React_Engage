import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function ButtonBox({ getNumberString, getResult }) {
  const style1 =
    "bg-white hover:bg-purple-200 text-black font-bold h-11 w-11 m-1 rounded-full";
  const style2 =
    "bg-yellow-500 hover:bg-purple-200 text-black font-bold h-11 w-24 m-1 rounded-full";
  const style3 =
    "bg-yellow-400 hover:bg-purple-200 text-black font-bold h-11 w-11 m-1 rounded-full";

  const [exprString, setExprString] = useState("");

  function displayNumbers(exprChar) {
    getNumberString((expr) => expr + exprChar);
    setExprString((expr) => expr + exprChar);
  }

  function displayResult() {
    try {
      getResult("= " + parseFloat(eval(exprString).toFixed(5)).toString());
    } catch (error) {
      getNumberString("ERROR");
    }
  }

  function clearDisplay() {
    getNumberString("");
    getResult("");
    setExprString("");
  }

  function clearEntry() {
    getNumberString((calExp) => calExp.slice(0, -1));
    getResult("");
    setExprString((calExp) => calExp.slice(0, -1));
  }

  return (
    <>
      <div className="h-auto grid w-auto bg-purple-900 p-4">
        <div>
          <Button
            buttonStyle={style1}
            buttonChar="7"
            handleClick={() => displayNumbers("7")}
          />
          <Button
            buttonStyle={style1}
            buttonChar="8"
            handleClick={() => displayNumbers("8")}
          />
          <Button
            buttonStyle={style1}
            buttonChar="9"
            handleClick={() => displayNumbers("9")}
          />
          <Button
            buttonStyle={style3}
            buttonChar="÷"
            //handleClick={() => displayNumbers("÷")}
            handleClick={() => displayNumbers("/")}
          />
        </div>
        <div>
          <Button
            buttonStyle={style1}
            buttonChar="4"
            handleClick={() => displayNumbers("4")}
          />
          <Button
            buttonStyle={style1}
            buttonChar="5"
            handleClick={() => displayNumbers("5")}
          />
          <Button
            buttonStyle={style1}
            buttonChar="6"
            handleClick={() => displayNumbers("6")}
          />
          <Button
            buttonStyle={style3}
            buttonChar="x"
            handleClick={() => displayNumbers("*")}
          />
        </div>
        <div>
          <Button
            buttonStyle={style1}
            buttonChar="1"
            handleClick={() => displayNumbers("1")}
          />
          <Button
            buttonStyle={style1}
            buttonChar="2"
            handleClick={() => displayNumbers("2")}
          />
          <Button
            buttonStyle={style1}
            buttonChar="3"
            handleClick={() => displayNumbers("3")}
          />
          <Button
            buttonStyle={style3}
            buttonChar="+"
            handleClick={() => displayNumbers("+")}
          />
        </div>
        <div>
          <Button
            buttonStyle={style1}
            buttonChar="0"
            handleClick={() => displayNumbers("0")}
          />
          <Button
            buttonStyle={style1}
            buttonChar="."
            handleClick={() => displayNumbers(".")}
          />
          <Button
            buttonStyle={style3}
            buttonChar="="
            handleClick={() => displayResult()}
          />
          <Button
            buttonStyle={style3}
            buttonChar="-"
            handleClick={() => displayNumbers("-")}
          />
        </div>
        <div>
          <Button
            buttonStyle={style2}
            buttonChar="CE"
            handleClick={() => clearEntry()}
          />
          <Button
            buttonStyle={style2}
            buttonChar="C"
            handleClick={() => clearDisplay()}
          />
        </div>
      </div>
    </>
  );
}
