import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import ClientsPage from "./pages/ClientsPage";
import PetsPage from "./pages/PetsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="clients"
            element={<ClientsPage />}
          />

          <Route
            path="pets"
            element={<PetsPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;