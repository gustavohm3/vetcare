import { useEffect, useState } from "react";
import api from "../services/api";

function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const loadClients = async () => {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createClient = async () => {
    try {
      await api.post("/clients", {
        name,
        phone,
        email
      });

      setName("");
      setPhone("");
      setEmail("");

      loadClients();
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar cliente");
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div style={{ padding: "30px", color: "black" }}>
      <h1>VetCare - Clientes</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={createClient}>Cadastrar</button>
      </div>

      <h2>Lista de clientes</h2>

      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            {client.name} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;