export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Metodo ${propertyKey}`);
            console.log(`----- Os parâmetros: ${JSON.stringify(args)}`);
            const retornoOriginal = metodoOriginal.apply(this, args);
            console.log(`--- O retorno ${JSON.stringify(args)}`);
            return retornoOriginal;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map