function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>
      <nav>
        <a>Panel General</a>
        <a>Pedidos</a>
        <a>PQRS</a>
        <a>Configuración</a>
      </nav>
      <button>Cerrar sesión</button>
    </aside>
  );
}

export default Sidebar;