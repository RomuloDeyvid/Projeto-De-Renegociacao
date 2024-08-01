export function domInjector(seletor: string){
    
    return function(target: any, propertyKey: string){
        console.log(`Modificando o ${target.constructor.name} e adicionando um getter na propriedade ${propertyKey}  `)
        
        let elemento : HTMLElement
        
        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor)
                console.log(`Buscando o elemento no DOM com o seletor ${seletor} e adicionando na ${propertyKey}`)
            }
            
            return elemento
        }

        Object.defineProperty(target, propertyKey, {get : getter})
    }
}