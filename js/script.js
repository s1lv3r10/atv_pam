//atv 1 e 2
function alerta(){
    window.alert("BEM VINDO AO SITE");
}
//atv 3
function pegar() {
    var elementoId = document.getElementById("id"); // Pega um elemento com base em um id, normalmente único, para fazer alguma alteração via js
    elementoId.style.color = "red";

    var elementosTag = document.getElementsByTagName("h5"); // Seleciona elementos com base em sua tag para uma alteração
    for (var i = 0; i < elementosTag.length; i++) {
        elementosTag[i].style.color = "orange";
    }

    var elementosClasse = document.getElementsByClassName("classe"); // Seleciona elementos com base em sua classe para alteração
    for (var j = 0; j < elementosClasse.length; j++) {
        elementosClasse[j].style.color = "yellow";
    }

    var elementoQuery1 = document.querySelector(".query1"); // Seleciona o primeiro elemento de um seletor CSS especificado
    elementoQuery1.style.color = "green";

    var elementosQuery2 = document.querySelectorAll(".query2"); // Seleciona todos os elementos com um seletor CSS especificado
    elementosQuery2.forEach(function(elemento) {
        elemento.style.color = "blue";
    });
}
//atv 4
function onmouse() {
    document.getElementById('elemento').style.color = 'blue'; 
}
function foco() {
    document.getElementById('campo').style.backgroundColor = '#616161';
}
function Selecao() {
    var select = document.getElementById('select');
    var opcaoSelecionada = select.options[select.selectedIndex].text;
    alert('Opção selecionada: ' + opcaoSelecionada);
}
function cliqueduplo() {
    var elemento = document.getElementById('dblclick');
    elemento.style.backgroundColor = 'green';
}
function tecla(event) {
    var teclaPressionada = event.key;
    document.getElementById('ultima-tecla').innerText = "Última tecla pressionada: " + teclaPressionada;
}
//atv 5
function cumprimentar() {
    document.getElementById('nomeada').innerText = "Olá, mundo!";
}
function calcularArea(raio) {
    return Math.PI * raio * raio;
}
function construtor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        return "Meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
    };
}
var vname="";
var saudacao = function(vname) {
    return "Olá, " + vname + "!";
}
function exibirsaudacao() {
    var nome = document.getElementById("nome").value;
    document.getElementById("greeting").innerText = saudacao(nome); 
}
function dobrar(numero) {
    return numero * 2;
}
//atv 6
let i=0;
function contar(){
    i++
    document.getElementById('conta1').innerText = "Total de vezes clicadas: " + i;
}
//atv 7
function caixaalta(){
    var letras=document.getElementById("letras").value;
    var alta=letras.toLocaleUpperCase();
    document.getElementById('altas').innerText = alta;
}
//atv 8
let n1, n2, result;
function btad(){
    n1=window.document.getElementById("n1").value;
    n2=window.document.getElementById("n2").value;
    let ps=document.getElementsByTagName("p");
    result= parseInt(n1)+parseInt(n2);
    ps[0].innerHTML=result;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
const btsub=()=>
{
    n1=window.document.getElementById("n1").value;
    n2=window.document.getElementById("n2").value;
    let ps=document.getElementsByTagName("p");
    result= parseInt(n1)-parseInt(n2);
    ps[0].innerHTML=result;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}

function bmul(){
    n1=window.document.getElementById("n1").value;
    n2=window.document.getElementById("n2").value;
    let ps=document.getElementsByTagName("p");
    result= parseInt(n1)*parseInt(n2);
    ps[0].innerHTML=result;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
function bdiv(){
    n1=window.document.getElementById("n1").value;
    n2=window.document.getElementById("n2").value;
    let ps=document.getElementsByTagName("p");
    result= parseInt(n1)/parseInt(n2);
    ps[0].innerHTML=result;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}