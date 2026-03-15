"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    let url = `https://www.melivecode.com/api/users`;
    if (page) url = `${url}?page=${page}&per_page=10`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      });
  }, [page]);
  return (
    <div>
      <header>Sai Lin Htet ID-6807665</header>
      <div>User</div>
      <div className="pagination-wrapper">
        {page <= 1 || (
          <div className="btn-page" onClick={() => setPage(page - 1)}>
            Previous
          </div>
        )}
        Page: {page}
        {page < users.total_pages ? (
          <div className="btn-page" onClick={() => setPage(page + 1)}>
            Next
          </div>
        ) : (
          <></>
        )}
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.data.map((u) => (
            <li key={u.id} className="img-container">
              <img src={u.avatar} width={25} /> {u.fname} {u.lname} (
              {u.username})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
