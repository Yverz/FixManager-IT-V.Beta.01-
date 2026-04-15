import logo from "../assets/logo.png";

<img src={logo} alt="Logo" />


function Header() {
  const usuario = "Juan Pérez";

  return (
    <header className="header">
      <input type="text" placeholder="Buscar..." />
      <span>Hola, {usuario}</span>
    </header>
  );
}

export default Header;
