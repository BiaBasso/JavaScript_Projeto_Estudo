// _ uma convernsão para o programador dizendo que o que tiver isso antes, só pode ser acessado pelos próprios metodos da classe

class Negociacao{

    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); // Congela o metodo
    }

// Apesar de ser um metodo, eu posso acessá-los como se fosse um atributo, porque eles se tornaram getters (leitura)

    get volume(){

        return this._quantidade * this._valor;
    }

    get data(){

        return new Date(this._data.getTime());
    }

    get quantidade(){

        return this._quantidade;
    }

    get valor(){

        return this._valor;
    }
}