import React from "react";

export default function page() {
  name = "test";
  var name = "KiRA";
  name = "Aribarge";
  //   car ="test"; error
  let car = "BMW";
  car = "tasla";
  const pi = 3.14;
  //   pi=3.55
  return (
    <div>
      <h1>Variables</h1>
      <h1>Name: {name}</h1>
      <h1>Car: {car}</h1>
      <h1>Pi: {pi}</h1>
    </div>
  );
}
