import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSusoensa/listasuspensa';
import Botao from '../botao';
import { useState } from 'react';

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')


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
        console.log("oii", nome, cargo, img, time);

    }

    return(
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Prencha os dados para criar os card</h2>

            <CampoTexto 
            obrigatorio={true}  label="Nome"  placeholder="Digite seu nome" valor={nome} 
            aoAlterado={valor => setNome(valor)}/>

            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" 
            valor={cargo} aoAlterado={valor => setCargo(valor)}/>

            <CampoTexto label="Imagem" placeholder="Digite seu img" 
            valor={img} aoAlterado={valor => setImg(valor)}/>

            <ListaSuspensa obrigatorio={true} label="Selecione sua Área" itens={times}
            valor={time} aoAlterado={valor => setTime(valor)}/>

            <Botao>
                Cadastrar
            </Botao>

        </form>
    </section>
    )
}

export default Formulario;