/*Funções em Javascript */

/*
Existem 2 tipos de funções:
- Reserevados pela linguage, é necessário apenas chamar a função para que 
seja executado
alert()
console.log()
prompt()

- Personalizadas 
Criadas pelo usuário, é necessário que sejam construídas 
utilizado a estrutura:
function nomeDaFuncao () {

}
e em seguida chamadas para serem executadas 

Em cada função há a presença dos parentesês () que podem estar vazio ou não.
Os parênteses recebem um argument, Quandoeste argumento é uma variável, dizemos que ele
recebe um parametro.
*/

//Função personalizada sem argumento, já o comando 
//console.log("Olá Mundo!") possui um argumento tipo string
function saudacao(){
    console.log("Olá Mundo!");

}

saudacao();

//Função personalizada com PARÂMETRO, pois se trata de uma variável 
//previamente declarada e que será utilizado no bloco do código

var nome;
function despedida (nome) {
    console.log("Tchau, " + nome); 

}

despedida("João");

function soma (a, b) {
    return a + b;
}

var resultado = soma (5, 3);
console.log(resultado);



