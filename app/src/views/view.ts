
export abstract class View<T> {
    protected elemento: HTMLElement

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLElement
        }else{
            throw Error(`Seletor ${seletor} não está presente no DOM, verifique`)
        }
    }

    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template
    }

    // protect vai ser usado para que apenas as classes filhas usem esse metodo
    // abstract vai ser usado para que as classes filhas sejam obrigadas a sobescrever esse metodo
    protected abstract template(model: T): string
}