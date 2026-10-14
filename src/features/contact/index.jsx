import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { v4 as uuidv4 } from "uuid";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("contactMessages");
      const data = saved ? JSON.parse(saved) : [];

      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("contactMessages", JSON.stringify(messages));
  }, [messages]);

  function handleSubmit(e) {
    e.preventDefault();

    const createMessage = {
      id: uuidv4(),
      name: form.name,
      email: form.email,
      message: form.message,
    };

    setMessages((prevMessages) => [createMessage, ...prevMessages]);

    setForm({ name: "", email: "", message: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log(messages.length);

  return (
    <div className="h-[200vh]">
      <Navbar />
      <div className=" space-y-8 w-1/2 mx-auto">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nama</label>
            <input
              className="border border-cyan-400 rounded-lg py-1 pl-4 w-full"
              type="text"
              id="name"
              name="name"
              placeholder="Ismail"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border border-cyan-400 rounded-lg py-1 pl-4 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="ismail@zoe.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Pesan</label>
            <textarea
              className="border border-cyan-400 rounded-lg py-1 pl-4 w-full resize-none"
              id="message"
              name="message"
              placeholder="Tulis pesan Anda disini..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className="px-2 py-1.5 bg-cyan-400 w-1/2 text-white rounded-lg">
            Kirim
          </button>
        </form>
      </div>

      <div className="mt-20 mx-15 grid grid-cols-2 gap-5">
        {messages.length !== 0 ? (
          messages.map((msg) => {
            return (
              <div key={msg.id} className="bg-cyan-50 px-5 py-3 rounded-xl">
                <div className="flex gap-2">
                  <p>Pesan dari:</p>
                  <h3 className="font-semibold underline"> {msg.name}</h3>
                </div>
                <p>email: {msg.email}</p>
                <p>pesan:</p>
                <p>{msg.message}</p>
              </div>
            );
          })
        ) : (
          <>
            <h1>ga ada pesan</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
