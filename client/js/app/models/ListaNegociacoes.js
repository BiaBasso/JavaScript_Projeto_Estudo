class ListaNegociacoes{

    constructor(){

        this._negociacoes = [];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }

    get negociacoes(){

        return [].concat(this._negociacoes); 
/* uma forma defenciva, pois ele concatena um array com outro,
        com isso, se alguem modificar algo no controller, muda essa segunda lista e não a original */
    }
}