import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function Menu() {

  const { loginGoogle } = useContext(AutenticacaoContext)

  return (
    <div className="flex gap-2">
      <MenuItem url="#inicio" className="hidden sm:flex">
        Inicio
      </MenuItem>
      <MenuItem url="#vantagens" className="hidden sm:flex">
        Vantagens
      </MenuItem>
      <MenuItem url="#depoimentos" className="hidden sm:flex">
        Depoimentos
      </MenuItem>
      <MenuItem
        onClick={loginGoogle}
        className="bg-gradient-to-r from-indigo-600 to-cyan-600">
        <div className="flex items-center gap-2">
          <span>
            <IconBrandGoogle size={15} />
          </span>
          <span>Login</span>
        </div>
      </MenuItem>
    </div>
  );
}
