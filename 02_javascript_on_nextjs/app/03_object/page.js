import React from "react";

export default function page() {
  const cars = ["toyota", "tasla", "honda", "nissa", "byd"];
  return (
    <div>
      <h1>Cars</h1>
      <h1>cars[0] {cars[0]}</h1>
      <ul>
        {cars.map((car) => (
          <li>{car}</li>
        ))}
      </ul>
    </div>
  );
}
