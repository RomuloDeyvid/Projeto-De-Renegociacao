import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js"

export abstract class View<T> {
    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLElement
        }else{
            throw Error(`Seletor ${seletor} não está presente no DOM, verifique`)
        }
        if (escapar) {
            this.escapar = escapar
        }
    }

    @logarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model)
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template
    }

    // protect vai ser usado para que apenas as classes filhas usem esse metodo
    // abstract vai ser usado para que as classes filhas sejam obrigadas a sobescrever esse metodo
    protected abstract template(model: T): string
}