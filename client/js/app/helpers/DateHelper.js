/* /\d{4}/ é uma expressão regular que estabelece o padrão, d minusculo aceita numeros D maiusculo só letras */

class DateHelper{

    constructor(){

        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
/* Template String: interpola as datas, seria uma concatenação, se usa dessa forma de cima */ 
    }

    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }
}