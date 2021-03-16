
	var leerDin = 0;
	var total = 0;

	
//funcion que simula el dinero depositado... modificable
function Cajero(dinero){

	dinero = parseFloat(dinero);

	leerDin = document.getElementById("total").innerHTML;	
	total = document.getElementById("total").innerHTML;	
	
	leerDin = (leerDin == null || leerDin == undefined || leerDin == "")?5:leerDin;
	leerDin = (parseFloat(leerDin) - parseFloat(dinero) );
 
	document.getElementById("total").innerHTML = leerDin;
	//alert(leerDin);
	if (  leerDin==0) {
		succes();
		setTimeout("vuelva()", 2000);
		setTimeout("redireccionarPagina()", 4000);
  
	}else if(leerDin<0){
		leerDin = (parseFloat(dinero)-parseFloat(total));

		document.getElementById("total").innerHTML = "0";
		DinCambio();
 		setTimeout("succes()", 2000);
		setTimeout("Cambio(this)", 2000);
		document.getElementById("depositado").value = "";

 		// parte de codigo para mandar cambio



 		//****************//

	}else if(leerDin<total){
		leerDin = (parseFloat(leerDin));
 
		setTimeout("Faltante()", 10000);
		document.getElementById("depositado").value = "";
	}else if(leerDin<=0){
		Swal.fire({
			customClass: 'swal-wide',
		  icon: 'warning',
		  title: 'INSERTA DINERO',
		  showConfirmButton: false,
		  timer: 3000
		});

	}


}
function tarifa(){
 var tar = 0;
 	tar = document.getElementById("tarifa").value;

}


//funcion para simular la cantidad a pagar.... modificable
function Total(){

	var clockin = document.getElementById("clockin").innerHTML;
	var clockout = document.getElementById("clock").innerHTML;
	var tar = document.getElementById("tarifa").innerHTML;;
	
	var hora1 = (clockout).split(":"),
    hora2 = (clockin).split(":"),
  
    t1 = new Date(),
    t2 = new Date();
 
	t1.setHours(hora1[0], hora1[1], hora1[2]);
	t2.setHours(hora2[0], hora2[1], hora2[2]);
 
//Aquí hago la resta
	t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
 
//Imprimo el resultado
	var time = document.getElementById("time");
	var horas = (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? "" : " ") : "") ;
	var minutos = (t1.getMinutes() ? ":" + t1.getMinutes() + (t1.getMinutes() > 1 ? "" : " ") : "");
	var segundos = (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? ":" : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? "" : "") : ""); 
	time.innerHTML = "" + horas + minutos + segundos;
	if (horas<=2 && minutos==0) {
		var total =  tar;
	}else if(horas>=2 && minutos>=1){
		var total = horas * tar;
	}else{
		var total =  horas * tar;
	}
	
	 document.getElementById("total").innerHTML = total;
	 var tot = document.getElementById("total").innerHTML;
	

}

function redireccionarPagina() {
  window.location.href ="./scanner.html";
}

function Cambio(comp){
  let id = comp.id;
	//alert("hola");
	setTimeout(myTimeout3, 1000) ;
		setTimeout("vuelva()", 8000);
		setTimeout("redireccionarPagina()", 9500);

}

function succes(){
	Swal.fire({
		customClass: 'swal-wide',
		  icon: 'success',
		  title: '¡PAGO EXITOSO!',
		  text: 'Tiene 15 minutos para salir',
		  showConfirmButton: false,
		  timer: 1700
		});
}
function vuelva(){
	Swal.fire({
		customClass: 'swal-wide',
		  icon: 'info',
		  title: '¡Vuelva Pronto!',
		  showConfirmButton: false,
		  timer: 1700
		});
}
function Faltante(){
	Swal.fire({
		customClass: 'swal-wide',
		icon: 'error',
		title: 'TE FALTA: '+leerDin+' pesos',
		showConfirmButton: false,
		timer: 2600
	  });
}
function DinCambio(){
	Swal.fire({
		customClass: 'swal-wide',
		icon: 'warning',
		title: 'TU CAMBIO: '+leerDin+' pesos',
		text: 'Tiene 15 minutos para salir',
		showConfirmButton: false,
		timer: 2000,

	  });
}

function Cancelado(){
	Swal.fire({
		customClass: 'swal-wide',
		icon: 'error',
		title: 'Regresando: '+leerDin+' pesos',
		text: 'Intente de nuevo mas tarde',
		showConfirmButton: false,
		timer: 5000,

	  });
}

function Cancelar(){
	leerDin= total - leerDin;
	Cancelado();
	document.getElementById("total").innerHTML = total;
	

}