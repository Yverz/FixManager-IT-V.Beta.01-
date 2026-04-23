import "../styles/Configuracion.css";

function Configuracion() {
  return (
    <section className="configuracion">
      <header className="config-header">
        <h1>Configuración del sistema</h1>
        <p>Administra los ajustes generales, seguridad y preferencias de FixManager‑IT™.</p>
      </header>

      
      <div className="config-card">
        <h2>Perfil de usuario</h2>
        <p>Información básica de la cuenta activa.</p>

        <div className="config-group">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre del usuario" />
        </div>

        <div className="config-group">
          <label>Correo electrónico</label>
          <input type="email" placeholder="usuario@empresa.com" />
        </div>

        <button className="btn-primary">Guardar cambios</button>
      </div>

      
      <div className="config-card">
        <h2>Seguridad</h2>
        <p>Configura las opciones de acceso y protección.</p>

        <div className="config-group">
          <label>Nueva contraseña</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="config-group">
          <label>Confirmar contraseña</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <label className="checkbox">
          <input type="checkbox" />
          Cerrar sesión automáticamente tras inactividad
        </label>

        <button className="btn-secondary">Actualizar seguridad</button>
      </div>

   
      <div className="config-card">
        <h2>Notificaciones</h2>
        <p>Define cómo quieres recibir alertas del sistema.</p>

        <label className="checkbox">
          <input type="checkbox" defaultChecked />
          Notificaciones por correo electrónico
        </label>

        <label className="checkbox">
          <input type="checkbox" />
          Alertas de nuevos tickets
        </label>

        <label className="checkbox">
          <input type="checkbox" defaultChecked />
          Cambios de estado en órdenes de servicio
        </label>
      </div>

      
      <div className="config-card">
        <h2>Configuración del sistema</h2>
        <p>Ajustes globales de FixManager‑IT.</p>

        <div className="config-group">
          <label>Idioma</label>
          <select>
            <option>Español</option>
            <option>Inglés</option>
          </select>
        </div>

        <div className="config-group">
          <label>Zona horaria</label>
          <select>
            <option>GMT‑5 (Colombia)</option>
            <option>GMT‑6</option>
            <option>GMT‑3</option>
          </select>
        </div>
      </div>

     
      <div className="config-card danger">
        <h2>Acciones avanzadas</h2>
        <p>Acciones que afectan el funcionamiento del sistema.</p>

        <button className="btn-danger">
          Restablecer configuración
        </button>
      </div>
    </section>
  );
}

export default Configuracion;