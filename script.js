var botao = document.querySelector('#but');
var msg = document.getElementById('msg');

botao.addEventListener('click', function(event){ 
  event.preventDefault();
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;
  

  if (usuario == "adm" && senha == "adm1"){
    msg.textContent = "Sucesso :)";
    msg.setAttribute("class", "sucesso");
    msg.classList.add("sucesso");
    
  }
  else {
  msg.textContent = "Deu erro :(";
  msg.setAttribute("class", "erro");
  msg.classList.add("erro")
}});

