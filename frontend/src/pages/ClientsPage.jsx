import { useEffect, useState } from "react";
import api from "../services/api";

function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function loadClients() {
    const response = await api.get("/clients");
    setClients(response.data);
  }

  useEffect(() => {
    loadClients();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/clients", {
      name,
      email,
    });

    setName("");
    setEmail("");

    loadClients();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Clientes
        </h2>

        <div className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-xl font-semibold">
          {clients.length} clientes
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 mb-8 shadow-sm"
      >
        <input
          type="text"
          placeholder="Nome do cliente"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
        />

        <input
          type="email"
          placeholder="Email do cliente"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
        />

        <button
          type="submit"
          className="bg-teal-700 hover:bg-cyan-700 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition"
        >
          Cadastrar Cliente
        </button>
      </form>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
          >
            <h3 className="text-lg font-bold text-gray-800">
              {client.name}
            </h3>

            <p className="text-gray-600 mt-1">
              {client.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsPage;