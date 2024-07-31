export function inspect(){
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function (...args: any[]){
            console.log(`--- Metodo ${propertyKey}`)
            console.log(`----- Os parâmetros: ${JSON.stringify(args)}`)
            const retornoOriginal = metodoOriginal.apply(this, args)
            console.log(`--- O retorno ${JSON.stringify(args)}`)
            return retornoOriginal
        }

        return descriptor
    }
}