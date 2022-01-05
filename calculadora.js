var n1 = "0";
var operacao = null;
var n2 = '';

function incluirDigito(digito){
    if(n2 && operacao && clicadoEmIgual){
        clicadoEmIgual = false;
        limpar();
        n1 = digito;
        mostrarNoDisplay(n1);
        return
    }
    if(operacao !== null){
        if(n2.length < 16){
            n2 = n2 + digito;  
        } else{
            n2 = n2;   
        }
        mostrarNoDisplay(n2); 
    } else{
        if(n1 === "0"){
        n1 = digito;
        } else{
            if(n1.length < 16){
                n1 += digito;
            } else{
                n1 = n1;
            }
        }
        mostrarNoDisplay(n1)
    }
}

function calcular(){
    var nCalculado = 0;
    var _n1 = parseFloat(n1);
    var _n2 = parseFloat(n2);
    switch(operacao){
        case '+':
            nCalculado = _n1 + _n2;
            break;
        case '-':
            nCalculado = _n1 - _n2;
            break;
        case '*':
            nCalculado = _n1 * _n2;
            break;
        case '/':
            nCalculado = _n1 / _n2;
            break;
    }
    return nCalculado;
}

function iniciarCalculo(simbolo){
    if(clicadoEmIgual){
        clicadoEmIgual = false;
        n2 = '';
    }
    
    if(operacao === null || n2 === ''){
        operacao = simbolo;
    } else{
        //ja tem n1, operacao e n2
        var resultado = calcular();
        n1 = resultado;
        operacao = simbolo;
        n2 = '';
        mostrarNoDisplay(n1)
    }
    operacao = simbolo;
    console.log(n1, operacao,n2)
}

function mostrarNoDisplay(valor){
    document.querySelector('#display').innerHTML = valor;
}

var clicadoEmIgual = false;

function finalizarCalculo(){
    clicadoEmIgual = true;
    var resultado = calcular();
    n1 = resultado;
    mostrarNoDisplay(n1);
    console.log('n1', n1, 'operacao',operacao, 'n2', n2);
}

function incluirPonto(){
    if(operacao && n2 ===''){
        n2 = '0.1';
    } else if(operacao && n2){
        if(n2[1] == '.'){
            n2 = n2;
        } else{
            n2 += '.';}
    } else {
        if(n1[1] == '.'){
            n1 = n1;
        } else{
            n1 += '.';
        }
    }
}

function limpar(){
    n1 = '0';
    n2 = '';
    operacao = null;
    mostrarNoDisplay(n1)
}

function obterPorcento(){
    if(!n2){
        limpar();
        mostrarNoDisplay(n1)
    } else{
        if(operacao === "+" || operacao === "-"){
            var porcento = (n1 * n2) / 100;
        } else{
            var porcento = n2 / 100;
        }
        n2 = porcento;
        mostrarNoDisplay(n2);
    }         
}
