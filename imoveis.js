const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
        "Toral de Imóveis: " + imoveis.length + 
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar Imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.propietario = prompt("Nome do propietário: ")
            imovel.quartos = prompt("Quantidade de quartos: ")
            imovel.banheiros = prompt("Quantidade de banheiros: ")
            imovel.garagem = prompt("COntem garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nPropietário:" + imovel.propietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nGaragem: " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel: " + (i + 1) +
                    "\nPropietário: " + imoveis[i].propietario +
                    "\nQuartos: " + imoveis[i].quartos + 
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                )
                
            }
            break
        case "3":
            alert("Encerrando...")
        default:
            break;
    }
} while (opcao !== "3")