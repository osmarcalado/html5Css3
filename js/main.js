

/*var validar = 0 ;
function validaidade(idade){
  
    if (idade >= 18){
        validar=true 
    }
    else {
        validar = false
    }
    return validar
}
var idade = prompt('Qual sua idade');
validaidade(idade)
console.log(validar);
 */

function clicou(){
    /* alert('obrigado por clicar');*/
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b> "


}

function redirecionar(){
window.open("http://curtamaisfestas.com.br/");  
}


function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";    
}



function voltar(elemento){
    elemento.innerHTML = "Passe o Mouse aqui";    
}

function load(){
    alert("Pagina Carregada");
}


function funcaochange(elemento){
    console.log (elemento.value);
}