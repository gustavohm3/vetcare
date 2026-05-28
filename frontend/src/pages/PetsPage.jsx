import { useEffect, useState } from "react";
import api from "../services/api";

function PetsPage() {
  const [pets, setPets] = useState([]);
  const [clients, setClients] = useState([]);

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [ownerId, setOwnerId] = useState("");

  async function loadPets() {
    const response = await api.get("/pets");
    setPets(response.data);
  }

  async function loadClients() {
    const response = await api.get("/clients");
    setClients(response.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/pets", {
      name,
      species,
      breed,
      age,
      ownerId,
    });

    setName("");
    setSpecies("");
    setBreed("");
    setAge("");
    setOwnerId("");

    loadPets();
  }

  useEffect(() => {
    loadPets();
    loadClients();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Pets
        </h2>

        <div className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-xl font-semibold">
          {pets.length} pets
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 mb-8 shadow-sm"
      >
        <input
          type="text"
          placeholder="Nome do pet"
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Espécie"
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />

        <input
          type="text"
          placeholder="Raça"
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
          value={ownerId}
          onChange={(e) => setOwnerId(e.target.value)}
        >
          <option value="">Selecione o dono</option>

          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-teal-700 hover:bg-cyan-700 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition"
        >
          Cadastrar Pet
        </button>
      </form>


      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold text-gray-800">
              {pet.name}
            </h3>

            <p className="text-gray-600 mt-1">
              {pet.species} • {pet.breed}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              {pet.age} anos
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetsPage;