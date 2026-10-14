import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { v4 as uuidv4 } from "uuid";

const initialForm = {
  name: "",
  email: "",
  message: "",
  phone: "",
  gender: "",
  // subject: "",
};
function Contact() {
  const [form, setForm] = useState(initialForm);

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
      phone: form.phone,
      gender: form.gender,
      // subject: form.subject,
    };
    console.log(createMessage);

    setMessages((prevMessages) => [createMessage, ...prevMessages]);

    setForm(initialForm);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

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

          <fieldset className="space-y-2">
            <legend>Apa jenis kelamin Anda?</legend>

            <div className="grid grid-cols-2">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="man"
                  name="gender"
                  value="man"
                  checked={form.gender === "man"}
                  onChange={handleChange}
                />
                <label htmlFor="man">Laki-laki</label>
              </div>

              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="woman"
                  name="gender"
                  value="woman"
                  checked={form.gender === "woman"}
                  onChange={handleChange}
                />
                <label htmlFor="woman">Perempuan</label>
              </div>
            </div>
          </fieldset>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Nomor Handphone</label>
            <input
              className="border border-cyan-400 rounded-lg py-1 pl-4 w-full"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+6289xxx"
              value={form.phone}
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

      <div className="mt-20 mx-15">
        {messages.length !== 0 ? (
          messages.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition space-y-3"
              >
                <div className="flex justify-between items-start border-b border-gray-100 pb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 capitalize">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">{item.email}</p>
                    <div className="flex flex-col items-end gap-1">
                      {item.gender && (
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            item.gender === "man"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-pink-50 text-pink-600"
                          }`}
                        >
                          {item.gender === "man" ? "Laki-laki" : "Perempuan"}
                        </span>
                      )}
                      {item.createdAt && (
                        <span className="text-xs text-gray-400">
                          {item.createdAt}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                  {item.message}
                </p>

                {item.phone && (
                  <div className="pt-2 text-xs text-gray-500 border-t border-gray-50 flex items-center gap-1">
                    <span>📞</span>
                    <span>{item.phone}</span>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto">
            <p className="text-gray-500 mb-4">Belum ada pesan yang masuk.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
