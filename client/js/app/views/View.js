class View{

    constructor(elemento){

        this._elemento = elemento;
    }

    template(){

        throw new Error('O metodo template deve ser implementado');
    }

    update(model){

        this._elemento.innerHTML = this.template(model); // converte essa string que estou passando em elementos do DOM
    }
}