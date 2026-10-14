import { useEffect, useState } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";

function Search() {
  const [data, setData] = useState();
  const [q, setQ] = useState("");
  const [resultQ, setResultQ] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((users) => {
        const dataUsers = users.map((user) => {
          return user.name;
        });
        setData(dataUsers);
      })
      .catch((err) => `err: ${err}`);
  }, []);

  function searchName(query) {
    const filterUser = data.filter((user) =>
      user.toLowerCase().includes(q.toLowerCase()),
    );

    setQ(query);
    setResultQ(filterUser);
  }

  function clearSearch() {
    setResultQ([]);
    setQ("");
  }

  return (
    <div className="mx-10 mb-5 h-screen">
      <h1 className="font-bold text-2xl ">Search</h1>
      <div className=" border-2 border-amber-300 flex p-3 w-77.5 rounded-2xl items-center space-x-3">
        <IconSearch stroke={2} />
        <input
          type="text"
          id="name"
          name="name"
          className="border-none focus:outline-none  "
          value={q}
          onChange={(e) => searchName(e.target.value)}
          placeholder="Mau cari siapa ?"
        />
        {q ? (
          <button onClick={clearSearch}>
            <IconX />
          </button>
        ) : (
          ""
        )}
      </div>
      <p>hasil:</p>
      <ul>
        {resultQ.map((result) => {
          return <li key={result}>{result}</li>;
        })}
      </ul>
    </div>
  );
}

export default Search;
