import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./cliente/listaClientes";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import ListaPet from "./pet/listaPet";
import ListaProdutos from "./produto/listaProdutos";
import ListaServicos from "./servico/listaServicos";
import Cadastro from "./cadastro";
import FormularioCadastroPet from "./pet/formularioCadastroPet";
import FormularioCadastroProduto from "./produto/formularioCadastroProduto";
import FormularioCadastroServico from "./servico/formularioCadastroServico";

function Roteador() {
    const [tela, setTela] = useState('Clientes')

    function selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        setTela(novaTela)
    }

    let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Cadastros', 'Compras' ]} />

    if (tela === 'Clientes') {
        return (
            <>
                {barraNavegacao}
                <ListaCliente tema="#e3f2fd" />
            </>
        )
    } else if (tela === 'Pets') {
        return (
            <>
                {barraNavegacao}
                <ListaPet tema="#e3f2fd"></ListaPet>
            </>
        )
    } else if (tela === 'Produtos') {
        return (
            <>
                {barraNavegacao}
                <ListaProdutos tema="#e3f2fd"></ListaProdutos>
            </>
        )
    }  else if (tela === 'Serviços') {
        return (
            <>
                {barraNavegacao}
                <ListaServicos tema="#e3f2fd"></ListaServicos>
            </>
        )      
    }  else if (tela === 'CadastroCliente') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroCliente tema="#e3f2fd"></FormularioCadastroCliente>
            </>
        ) 
    }  else if (tela === 'CadastroPet') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroPet tema="#e3f2fd"></FormularioCadastroPet>
            </>
        ) 
    }  else if (tela === 'CadastroProduto') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroProduto tema="#e3f2fd"></FormularioCadastroProduto>
            </>
        ) 
    }  else if (tela === 'CadastroServiço') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroServico tema="#e3f2fd"></FormularioCadastroServico>
            </>
        ) 
     } else {
        return (
            <>
                {barraNavegacao}
                <Cadastro seletorView={selecionarView}/>
            </>
        )
    }
}

export default Roteador