"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    setLoading(true);
    let url = `https://www.melivecode.com/api/users`;
    if (query) url = `${url}?search=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
        setLoading(false);
      });
  }, [query]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <header>Sai Lin Htet ID-6807665</header>
      <div>
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="button" value="🔎" onClick={() => setQuery(search)} />
        <input
          type="button"
          value="rest"
          onClick={() => {
            setQuery("");
            setSearch("");
          }}
        />
      </div>
      Search state: {search}
      <br />
      Query state: {query}
      <ul>
        {users.map((u) => (
          <li key={u.id} className="img-container">
            <img src={u.avatar} width={25} /> {u.fname} {u.lname} ({u.username})
          </li>
        ))}
      </ul>
    </div>
  );
}
