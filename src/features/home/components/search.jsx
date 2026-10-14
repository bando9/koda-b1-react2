import { useEffect, useState } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";

export function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);

      if (!response.ok) return "Gagal mendapatkan data...";
      const dataUsers = await response.json();

      setData(dataUsers);
    }
    return getData;
  }, []);

  function searchName(q) {
    setQuery(q);

    const findUser = data.filter((user) =>
      user.name.toLowerCase().startsWith(q.toLowerCase().trim()),
    );

    setResult(findUser);
  }

  function clearSearch() {
    setResult([]);
    setQuery("");
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
          value={query}
          onChange={(e) => searchName(e.target.value)}
          placeholder="Mau cari siapa ?"
        />
        {query ? (
          <button onClick={clearSearch}>
            <IconX />
          </button>
        ) : (
          ""
        )}
      </div>
      <p>hasil:</p>

      <ul>
        {result.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
