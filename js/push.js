//funcion para simular el presionado de boton. e imprime el boleto.
function BotonRojo(comp){
  let id = comp.id;
	setTimeout(myTimeout1, 1000) ;

  setTimeout(myTimeout2, 6000) ;
	window.setInterval("reFresh()",12000);

 

}
function myTimeout1() {
  document.getElementById("mensaje").innerHTML= '<img id="text1" class="boton-r"  src="images/cargando.gif"> <h3 id="text2" class="text2">      Imprimiendo... </h3>   <img id="text3" class="boton-r"  src="images/cargando.gif"> ';
}


function myTimeout2() {
  document.getElementById("mensaje").innerHTML =  '<h3 id="text1"  > Tome su boleto </h3> <h3 id="text2" ><img class="boton-rojo"  src="images/boleto.png"></3> <h3 id="text3" > <img class="boton-ro " src="images/boleto.png"></h3> ';
 
}
function myTimeout3() {
  document.getElementById("mensaje").innerHTML= '<img id="text1" class="boton-r" src="images/cargando.gif"> <h3 id="text2" > Tome su cambio </h3>   <img id="text3" class="camb" src="images/cambio.png"> ';
  	
}
function reFresh() {

location.reload(true)

}

