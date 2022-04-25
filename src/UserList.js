import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(baseURL);
      const results = await response.json();
      setUsers(results);
      console.log(results);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <div>
        {users
          ?.filter(({ name }) => name.toLowerCase().indexOf(input) >= 0)
          .map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
      </div>
    </>
  );
};

export default UserList;
