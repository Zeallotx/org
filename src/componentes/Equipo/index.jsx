import "./Equipo.css"

const Equipo = (props) => {

    //DESTRUCTURACIÓN
    const {colorPrimario, colorSecundario, titulo} = props.datos
    //
    const backObj = {
      background: colorSecundario,
    };

    const styleTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={backObj}>
        <h3 style={styleTitulo}>{titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo