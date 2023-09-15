import "./Equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    //DESTRUCTURACIÓN
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props;
    //
    const backObj = {
      background: hexToRgba(colorPrimario,0.6),
    };

    const styleTitulo = {
        borderColor: colorPrimario
    }

    return (
      <>
        {colaboradores.length > 0 && (
          <section className="equipo" style={backObj}>
            <input
              type="color"
              value={colorPrimario}
              onChange={(e) => {
                actualizarColor(e.target.value, titulo);
              }}
            />
            <h3 style={styleTitulo}>{titulo}</h3>
            <div className="colaboradores">
              {colaboradores.map((colaborador, index) => (
                <Colaborador
                  datos={colaborador}
                  key={colaborador.nombre}
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                />
              ))}
            </div>
          </section>
        )}
      </>
    );
}

export default Equipo