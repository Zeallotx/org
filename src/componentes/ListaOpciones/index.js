import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método map -> arreglo.map( (equipo, index) => {
    //      return <option><option/>
    // })


    const manejarCambio = (e) => {
      console.log("cambio", e.target.value)
      props.actualizarValor(e.target.value)
    }

    return (
      <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
          <option value="" disabled defaultValue="" hidden>Seleccione un equipo</option>
          {props.equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
      </div>
    );
}

export default ListaOpciones