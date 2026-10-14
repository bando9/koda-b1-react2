import { useEffect, useState } from "react";

export default function UseEffect() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("pake use effect");
  }, [number]);

  function plus() {
    setNumber((prev) => prev + 1);
  }

  return (
    <div className="px-4 py-3 border-b">
      <h1 className="text-xl font-bold">UseEffect</h1>

      <p className="my-4 ">Nilai number: {number}</p>
      <button onClick={plus}>Tambah</button>
    </div>
  );
}
