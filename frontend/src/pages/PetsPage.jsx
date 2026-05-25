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

  const loadPets = async () => {
    try {
      const response = await api.get("/pets");
      setPets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadClients = async () => {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPet = async () => {
    try {
      await api.post("/pets", {
        name,
        species,
        breed,
        age,
        ownerId
      });

      setName("");
      setSpecies("");
      setBreed("");
      setAge("");
      setOwnerId("");

      loadPets();

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar pet");
    }
  };

  useEffect(() => {
    loadPets();
    loadClients();
  }, []);

  return (
    <div style={{ padding: "30px", color: "black" }}>
      <h1>VetCare - Pets</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          marginBottom: "30px"
        }}
      >
        <input
          placeholder="Nome do pet"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Espécie"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />

        <input
          placeholder="Raça"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          value={ownerId}
          onChange={(e) => setOwnerId(e.target.value)}
        >
          <option value="">
            Selecione o dono
          </option>

          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name}
            </option>
          ))}
        </select>

        <button onClick={createPet}>
          Cadastrar Pet
        </button>
      </div>

      <h2>Lista de pets</h2>

      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            <strong>{pet.name}</strong> - {pet.species}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetsPage;