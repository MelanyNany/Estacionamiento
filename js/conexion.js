

function conexion () {
var wifi = document.getElementById("wifi");
if (navigator.onLine) {
  wifi.style.color="#50ed50";
  wifi.addClaseName="parpadea";

} else {
  console.log('offline');
	 wifi.style.color="#ed643b";
}
};
