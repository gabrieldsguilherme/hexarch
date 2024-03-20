import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import Ferrari from "@/core/fundamentos/Ferrari";
import Carro from "@/core/fundamentos/Carro";
import Civic from "@/core/fundamentos/Civic";
import { terminal } from "terminal-kit";

export default async function dip() {
    TerminalUtil.titulo("Dependency Inversion Principle")

    const [tipo] = await TerminalUtil.selecao("Tipo de carro?", ["Ferrari", "Fusca", "Civic"])

    let carro: Carro
    switch (tipo) {
        case 0:
            carro = new Ferrari
            break
        case 1:
            carro = new Fusca
            break
        default:
            carro = new Civic
            break
    }

    corrida(carro, terminal.red)
    
    await TerminalUtil.esperarEnter()
}