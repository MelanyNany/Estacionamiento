<?php //Ejemplo aprenderaprogramar.com, archivo escribir.php
$colorF =$_POST["colorF"];
$colorL =$_POST["colorL"];
$colorE =$_POST["colorE"];
$colorM =$_POST["colorM"];

if (isset($_POST['Guardar'])) {   
  $file = fopen("../css/custom.css", "w");

  fwrite($file, ":root {
    --main: ".$colorF.";
    --menu: -webkit-radial-gradient(200px top, ellipse, white, ".$colorM.", black);
    --letters: ".$colorL.";
    --elements: ".$colorE.";
    --logo: url('../images/logo.png');


  }". PHP_EOL);

  fclose($file);

} 
elseif (isset($_POST['Preder'])) {
 $file = fopen("../css/custom.css", "w");

 fwrite($file, ":root {
  --main: #e3e3f1;
  --menu: -webkit-radial-gradient(200px top, ellipse, white,#1162ac , black);
  --letters: #0f5492;
  --elements: #ffffff;
    --logo: url('../images/logo1.png');
}". PHP_EOL);

 fclose($file);

}

header("Location: ../index.html");




?>