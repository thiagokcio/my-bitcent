import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import Lista from "./Lista";
import Formulario from "./Formulario";
import NaoEncontrado from "../template/NaoEncontrado";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useTransacao from "@/data/hooks/useTransacao";
import CampoMesAno from "../template/CampoMesAno";

export default function Financas() {
  const { 
    data, alterarData, transacoes, transacao, selecionar, salvar, excluir 
  } = useTransacao();

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5">
        <div className="flex justify-between">
          <CampoMesAno
            data={data}
            dataMudou={alterarData}  
          />
          <Button
            className="bg-blue-500"
            leftIcon={<IconPlus />}
            onClick={() => selecionar(transacaoVazia)}
          >
            Nova Transação
          </Button>
        </div>

        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            excluir={excluir}
            cancelar={() => selecionar(null)}
          />
        ) : transacoes.length ? (
          <Lista transacoes={transacoes} selecionarTransacao={selecionar} />
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada.</NaoEncontrado>
        )}
      </Conteudo>
    </Pagina>
  );
}
