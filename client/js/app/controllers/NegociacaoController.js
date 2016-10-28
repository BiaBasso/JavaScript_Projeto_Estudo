                /******************* DICAS DO CODIGO ************************/

// O constructor ali esta guardando nessas variaveis os elementos que ele encontrou do DOM para não ter que percorrer sempre

// bind diz para manter a associação com algo, nesse caso document

// Os "..." sabe que tem que desmenbrar o Array

/* Com o map foi feita a função que pega o item do Array e retorna ele
 e se ele estiver no indice 1 (segunda posicao do Array), ele irá subtrair 1, caso contrario, ele apenas retorna o item */

/* Arrow function (por causa do igual e maior que forma uma flecha), 
 isso deixa implicito a palavra function e já traz o retorno da função */

/* Esse return item - indice % 2; esta fazendo a função do IF comentado, 
 pois ele subtrai de acordo com o resultado do resto, se for 1 ele subtrai, senão, não */

class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){

        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());        
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
        
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}