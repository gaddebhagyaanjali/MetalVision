import StatsCards from "./StatsCards";

function Dashboard() {
  return (
    <section className="bg-slate-950 py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold text-white">
            AI Analytics Dashboard
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Live insights generated from your material detection results.
          </p>

        </div>

        <StatsCards />

      </div>

    </section>
  );
}

export default Dashboard;