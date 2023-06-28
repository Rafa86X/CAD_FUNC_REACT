import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSusoensa/listasuspensa';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Back-End',
        'Data Scienc',
        'DevOps',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return(

    <section className='formulario'>
        <form>
            <h2>Prencha os dados para criar os card</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Digite seu img" />
            <CampoTexto label="Time" placeholder="Digite seu time" />
            <ListaSuspensa label="Selecione sua Área" itens={times}/>
        </form>
    </section>
    )
}

export default Formulario;