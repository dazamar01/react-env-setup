import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hi daniel.!</p>;
}

render(<Hi />, document.getElementById("app"));
