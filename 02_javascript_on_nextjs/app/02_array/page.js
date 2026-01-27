import React from "react";

export default function page() {
  const person = { name: "Thannob", age: 20 };
  const person2 = { name: "Karn", age: 30 };
  return (
    <div>
      <h1>Staffs</h1>
      <h1>
        Name: {person.name} Age: {person.age}
      </h1>
      <h1>
        Name: {person2.name} Age: {person2.age}
      </h1>
    </div>
  );
}
