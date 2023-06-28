import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSusoensa/listasuspensa';
import Botao from '../botao';

const Formulario = () => {

    const times = [
        '',
        'Programação',
        'Front-End',
        'Back-End',
        'Data Scienc',
        'DevOps',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]


    const aoSalvar = (evento) =>{

        evento.preventDefault()
        console.log("oii");

    }

    return(
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Prencha os dados para criar os card</h2>
            <CampoTexto obrigatorio={true}  label="Nome" placeholder="Digite seu nome" />
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Digite seu img" />
            <ListaSuspensa obrigatorio={true} label="Selecione sua Área" itens={times}/>
            <Botao>
                Cadastrar
            </Botao>

        </form>
    </section>
    )
}

export default Formulario;