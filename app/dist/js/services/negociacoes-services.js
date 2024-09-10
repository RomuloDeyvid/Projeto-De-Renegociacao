import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacoesDoDia() {
        return fetch('https://gist.githubusercontent.com/RomuloDeyvid/f30ee9dceafb170b77f6ceb170fd31ab/raw/1bc918ea299c3c8755cae43e5641f44af43555fe/gistfile1.txt').then(res => res.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-services.js.map