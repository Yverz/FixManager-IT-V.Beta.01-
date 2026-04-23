import "../styles/Configuracion.css";

function Pedidos() {
  return (
    <section className="configuracion">
      <header className="config-header">
        <h1>Pedidos</h1>
        <p>
          Gestión de pedidos, órdenes de servicio y solicitudes de soporte
          técnico en FixManager‑IT™.
        </p>
      </header>

      
      <div className="config-card">
        <h2>Crear nuevo pedido</h2>
        <p>Registra una nueva orden de servicio o solicitud técnica.</p>

        <div className="config-group">
          <label>Tipo de pedido</label>
          <select>
            <option>Orden de servicio</option>
            <option>Soporte técnico</option>
            <option>Mantenimiento preventivo</option>
            <option>Mantenimiento correctivo</option>
          </select>
        </div>

        <div className="config-group">
          <label>Prioridad</label>
          <select>
            <option>Baja</option>
            <option>Media</option>
            <option>Alta</option>
            <option>Crítica</option>
          </select>
        </div>

        <div className="config-group">
          <label>Área responsable</label>
          <select>
            <option>Soporte IT</option>
            <option>Infraestructura</option>
            <option>Hardware</option>
            <option>Software</option>
          </select>
        </div>

        <div className="config-group">
          <label>Descripción del pedido</label>
          <textarea
            rows="4"
            placeholder="Describe el servicio o inconveniente..."
            style={{
              padding: "10px",
              borderRadius: "10px",
              resize: "none",
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#e5e7eb",
            }}
          />
        </div>

        <button className="btn-primary">Crear pedido</button>
      </div>

      
      <div className="config-card">
        <h2>Pedidos recientes</h2>
        <p>Últimas órdenes registradas en el sistema.</p>

        <div className="checkbox">
          <strong>#PED-2041</strong> – En proceso (Prioridad alta)
        </div>

        <div className="checkbox">
          <strong>#PED-2036</strong> – Asignado a técnico
        </div>

        <div className="checkbox">
          <strong>#PED-2029</strong> – Completado
        </div>
      </div>

    
      <div className="config-card">
        <h2>Indicadores de pedidos</h2>
        <p>Resumen general del estado de órdenes.</p>

        <div className="checkbox"> Pedidos activos: 12</div>
        <div className="checkbox"> Finalizados hoy: 5</div>
        <div className="checkbox"> Pendientes críticos: 2</div>
      </div>

     
      <div className="config-card danger">
        <h2>Acciones administrativas</h2>
        <p>Opciones disponibles solo para administradores.</p>

        <button className="btn-danger">
          Cancelar pedidos seleccionados
        </button>
      </div>
    </section>
  );
}

export default Pedidos;