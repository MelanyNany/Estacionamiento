
var hora;
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var f = new Date();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec;
    document.getElementById("date").innerHTML = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
 
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
   }

  //funcion adicional para obtener la hora en la que presiona el boton... modificable.
  function DetenerHora(){
      // Deteniendo el setTimeout
      hora = document.getElementById("clock");
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hora de entrada: \n'+hora.innerHTML,
      showConfirmButton: false,
      timer: 1700
    });

  }


