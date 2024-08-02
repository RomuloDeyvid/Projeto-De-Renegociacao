export function logarTempoDeExecucao(emSegundo = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundo) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retornoOriginal = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O metodo ${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            retornoOriginal;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map