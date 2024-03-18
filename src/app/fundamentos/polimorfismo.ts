import TerminalUtil from "../util/TerminalUtil"

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo");

    const tipoCarro = await TerminalUtil.selecao("Qual o tipo de carro?", ["Hatch", "Sedan", "SUV"]);

    while (true) {
        TerminalUtil.limpar()
        const continuar = await TerminalUtil.confirmacao("Deseja continuar?")
        if (!continuar) return
    }
}