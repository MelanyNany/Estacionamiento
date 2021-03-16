
<?php 
$nomar=$_POST['nomar'];
if (isset($_POST['Guardar'])) { 

	$target_path1 = "../images/";
	$target_path = $target_path1 . basename( $_FILES['uploadedfile']['name']); 
	$nombre = $_FILES['uploadedfile']['tmp_name'];
	$imagen = getimagesize($nombre);    //Sacamos la información
	$maximum = array(
        'width' => '281',
        'height' => '216'
	);
	$width = '281';
    $height = '216';
	$ancho = $imagen[0];              //Ancho
	$alto = $imagen[1];   
	if (!($_FILES['uploadedfile']['type'] =="image/jpeg" OR $_FILES['uploadedfile']['type'] =="image/gif" OR $_FILES['uploadedfile']['type'] =="image/png"))
		{echo "<script> alert('Tu archivo tiene que ser JPG o GIF o PNG. Otros archivos no son permitidos');
		window.location.href='../tema.html';
	</script>";
	$uploadedfileload="false";

}else if($ancho > $width || $alto > $height ){
	echo "<script> alert('Tu archivo tiene que medir $width x $height');
	window.location.href='../tema.html';
</script>";
	$uploadedfileload="false";

}
else{
	if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) 
	{ 
		rename($target_path , $target_path1."logo.png");
		 $file = fopen("../css/custom.css", "w");

			 fwrite($file, ":root {
			  --main: #EAD8FA;
			  --menu: -webkit-radial-gradient(200px top, ellipse, white,#1162ac , black);
			  --letters: #0f5492;
			  --elements: #ffffff;
			    --logo: url('../images/logo.png');
			}". PHP_EOL);

			 fclose($file);
			 echo "<script> alert(' $alto ha ocurrido algo mal');window.location.href='../tema.html ";
		header("Location: ../index.html");
		echo "<script> alert(' $alto ha ocurrido algo mal');window.location.href='../tema.html ";
	

	}else{
		echo "<script> alert('ha ocurrido algo mal');
		window.location.href='../tema.html';
	</script>";
	} 
}
}

?>
