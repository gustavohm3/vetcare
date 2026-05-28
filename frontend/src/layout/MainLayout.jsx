import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      <aside className="w-64 bg-teal-700 text-white p-6 shadow-xl">

        <h1 className="text-3xl font-bold mb-10">
          VetCare 🐾
        </h1>

        <nav className="flex flex-col gap-4">

            <Link
                to="/"
                className="bg-teal-700 hover:bg-cyan-700 text-white px-4 py-3 rounded-xl font-semibold shadow-md transition"
                >
                Dashboard
                </Link>

                <Link
                to="/clients"
                className="bg-teal-700 hover:bg-cyan-700 text-white px-4 py-3 rounded-xl font-semibold shadow-md transition"
                >
                Clientes
                </Link>

                <Link
                to="/pets"
                className="bg-teal-700 hover:bg-cyan-700 text-white px-4 py-3 rounded-xl font-semibold shadow-md transition"
                >
                Pets
            </Link>
        </nav>

      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;