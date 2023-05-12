import MiniFormulario from "../template/MiniFormulario";

export default function Formularios () {
    return (
        <div>
             <MiniFormulario
                titulo="Seu Nome"
                descricao="Esse é o nome usado pela plataforma em todas as suas interações."
                children="Olá"
                msgRodape="O nome deve possuir entre 3 e 80 caracteres." 
            />
                
        </div>
    )
}