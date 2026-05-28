function DashboardCards({ totalClients, totalPets }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg opacity-90">
          Total de Clientes
        </h2>

        <p className="text-5xl font-bold mt-4">
          {totalClients}
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg opacity-90">
          Total de Pets
        </h2>

        <p className="text-5xl font-bold mt-4">
          {totalPets}
        </p>
      </div>

    </div>
  );
}

export default DashboardCards;