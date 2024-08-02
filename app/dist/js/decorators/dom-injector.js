export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando o ${target.constructor.name} e adicionando um getter na propriedade ${propertyKey}  `);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando o elemento no DOM com o seletor ${seletor} e adicionando na ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map