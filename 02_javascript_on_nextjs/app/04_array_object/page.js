import React from "react";

export default function page() {
  const people = [
    { id: 1, name: "KiRA", age: 30 },
    { id: 2, name: "Karn", age: 30 },
    { id: 3, name: "Parkpoom", age: 40 },
  ];
  return (
    <div>
      <h1>Members</h1>
      <h1>{people[0].name}</h1>
      <h1>{people[2].age}</h1>

      <ol>
        {people.map((person) => (
          <li key={person.id}>
            Name: {person.name} Age: {person.age}
          </li>
        ))}
      </ol>
    </div>
  );
}
