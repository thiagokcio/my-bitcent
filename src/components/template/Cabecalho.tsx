import BoasVindas from "./BoasVindas";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho () {
    return (
        <div className={`
            flex justify-between items-center
            p-7 border-b border-zinc-700
        `}>
            <BoasVindas/>
            <MenuUsuario/>
        </div>
    )
}