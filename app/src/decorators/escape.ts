export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value
    descriptor.value = function (...args: any[]) {
        let retornoOriginal = metodoOriginal.apply(this, args)

        if (typeof retornoOriginal === 'string') {
            // console.log(`@escape em ação na classe ${this.constructor.name} para o metodo ${propertyKey}`)
            retornoOriginal = retornoOriginal.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        return retornoOriginal
    }
    return descriptor
}