import { useEffect, useState } from "react";

export default function UsePreview() {
  const [name, setName] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((res) => res.json())
      .then((data) => setName(data.name))
      .catch((err) => `error: ${err}`);
  });
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
