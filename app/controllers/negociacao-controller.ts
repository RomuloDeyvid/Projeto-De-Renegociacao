import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona(): void{
        const negociacao = this.criaNeociacao()
        console.log(negociacao)
        this.limparFormulario()
    }
    criaNeociacao(): Negociacao{
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(data, quantidade, valor)
        
    }
    limparFormulario(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus( )
    }
}