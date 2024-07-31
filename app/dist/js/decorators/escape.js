export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retornoOriginal = metodoOriginal.apply(this, args);
        if (typeof retornoOriginal === 'string') {
            retornoOriginal = retornoOriginal.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retornoOriginal;
    };
    return descriptor;
}
