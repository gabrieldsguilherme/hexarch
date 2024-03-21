import TerminalUtil from "@/app/util/TerminalUtil";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";
import registrarUsuario from "../usuario/regsitrarUsuario";

export default async function menuUsuario() {
    TerminalUtil.titulo('Usuário')

    const [indice] = await TerminalUtil.menu([
        '1. Registrar Usuário',
        'Voltar'
    ])

    switch (indice) {
        case 0: await registrarUsuario(); break
        default: return
    }

    await menuUsuario()
}