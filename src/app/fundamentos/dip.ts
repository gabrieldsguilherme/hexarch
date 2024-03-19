import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminalUtil";

export default async function dip() {
    TerminalUtil.titulo("Dependency Inversion Principle")
    corrida()
    
    await TerminalUtil.esperarEnter()
}