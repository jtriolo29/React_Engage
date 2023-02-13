import React from "react";

export default function DisplayScreen({ numberString, result }) {
  return (
    <div className="h-20 bg-purple-700 text-white text-right px-4">
      <p className="h-2/4 text-3xl mt-2">{result}</p>
      <p className="h-2/4 text-sm mt-2">{numberString}</p>
    </div>
  );
}
