 window.addEventListener('load', init, false);
        function init() {
            let div = document.querySelector('#ocultar-y-mostrar');
            let div2 = document.getElementById("tema-logo");
            let div3 =document.getElementById("Guardar");
            let div4 =document.getElementById("Tcolores");

            div.style.visibility = 'visible';
            div2.style.visibility = 'hidden';
            div3.style.visibility = 'visible';

            let boton = document.querySelector('#ocultar-mostrar');
            //esta es la sentencia para subir los divs o para moverlos
           // document.style.float="right"
            boton.addEventListener('click', function (e) {
                if(div.style.visibility === 'visible'){
                    div.style.visibility = 'hidden';
                    div2.style.visibility = 'visible';
                    div3.style.visibility= 'hidden';
                    document.getElementById("ocultar-mostrar").innerHTML= "Escoger colores";
                    document.getElementById("Tcolores").innerHTML="<h5 class='tcolores'>La imagen o logo debe medir 281 x 216 <br> Debe ser sin fondo y centrado<h5>";
                }else{
                    div.style.visibility = 'visible';
                    div2.style.visibility = 'hidden';
                    div3.style.visibility= 'visible';
                    document.getElementById("ocultar-mostrar").innerHTML= "Escoger logo";
                    document.getElementById("Tcolores").innerHTML= "Escoger Colores";
                }
            }, false);
        }

        