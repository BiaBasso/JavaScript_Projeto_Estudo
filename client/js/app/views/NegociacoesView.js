/* reduce processa um array e no final da um único resultado, neste caso,
 o segundo parametro é a inicialização do total que seria 0, e depois ele usa o valor anterior encontrado */

class NegociacoesView{

    constructor(elemento){

        this._elemento = elemento;
    }

    _template(model){

        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>            
                ${model.negociacoes.map(n =>  `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
            </tfoot>
        </table> `;
    }

    update(model){

        this._elemento.innerHTML = this._template(model); // converte essa string que estou passando em elementos do DOM
    }
}

