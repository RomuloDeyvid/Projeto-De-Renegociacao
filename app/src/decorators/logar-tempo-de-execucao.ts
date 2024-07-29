export function logarTempoDeExecucao(emSegundo: boolean = false){

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: any[]){
            let divisor = 1
            let unidade = 'milisegundos'
            
            if(emSegundo){
                divisor = 1000
                unidade = 'segundos'
            }

            const t1 = performance.now()
            const retornoOriginal = metodoOriginal.apply(this, args)
            const t2 = performance.now()
            console.log(`O metodo ${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`)
            retornoOriginal
        }

        return descriptor
    }

}