import './campotexto.css'

const CampoTexto = (props) =>{

    const aodigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label >{props.label}</label>
            <input tipe="text"
            value={props.valor} 
            onChange={aodigitado}
            required={props.obrigatorio}
            placeholder={props.placeholder} />
            
        </div>
    )

}

export default CampoTexto;