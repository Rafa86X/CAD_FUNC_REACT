import './campotexto.css'

const CampoTexto = (props) =>{

    return (
        <div className="campo-texto">
            <label >{props.label}</label>
            <input tipe="text" 
            placeholder={props.placeholder} />
            
        </div>
    )

}

export default CampoTexto;