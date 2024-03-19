import Carro from "./Carro";
import TerminalUtil from "@/app/util/TerminalUtil";

export default function corrida(carro: Carro) {
    TerminalUtil.titulo("Corrida")
    TerminalUtil.exibirChaveValor("### Carro: ", carro.constructor.name)

    Array.from({length: 10}).forEach(() => {
        carro.acelerar()
        TerminalUtil.exibirChaveValor(`Velocidade: `, `${carro.velocidadeAtual} km/h`)
    })

    Array.from({length: 10}).forEach(() => {
        carro.frear()
        TerminalUtil.exibirChaveValor(`Velocidade: `, `${carro.velocidadeAtual} km/h`)
    })
}