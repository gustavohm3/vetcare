import { Routes, Route, Link } from "react-router-dom";
import ClientsPage from "./pages/ClientsPage";
import PetsPage from "./pages/PetsPage";

function App() {
  return (
    <div style={{ padding: "20px", color: "black" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Clientes</Link> |{" "}
        <Link to="/pets">Pets</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ClientsPage />} />
        <Route path="/pets" element={<PetsPage />} />
      </Routes>
    </div>
  );
}

export default App;