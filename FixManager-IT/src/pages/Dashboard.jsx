function Dashboard() {
  const ventasDia = 1000;

  return (
    <section className="dashboard">
      <h1>Resumen General</h1>
      <p>Bienvenido al sistema</p>

      <div className="card">
        <p>Ventas del día</p>
        <h2>${ventasDia}</h2>
      </div>
    </section>
  );
}

export default Dashboard;