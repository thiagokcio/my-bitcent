import { useContext, useState } from "react";
import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Lista from "./Lista";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import Id from "@/logic/core/comum/Id";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import servicos from "@/logic/core";
import useTransacao from "@/data/hooks/useTransacao";

export default function Financas() {

  const { transacoes, transacao, selecionar, salvar, excluir} = useTransacao()

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        <Button className="bg-blue-500"
                leftIcon={<IconPlus/>}
                onClick={() => selecionar(transacaoVazia)}>
          Nova Transação
        </Button>
        
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            excluir={excluir}
            cancelar={() => selecionar(null)}
          />
        ) : transacoes.length ? (
          <Lista 
            transacoes={transacoes} 
            selecionarTransacao={selecionar} 
          />
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada.</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
