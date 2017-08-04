<?php
/**
 * Created by inicioSesion.
 * User: chalosalvador
 * Date: 4/8/17
 * Time: 16:20
 */

if ($_POST) {

// simulamos la consulta a la base de usuarios
	$usuarios = [
		[
			"usuario" => "chalo",
			"clave"   => "12345",
			"nombre" => "Edwin",
			"apellido" => "Salvador"
		],
		[
			"usuario" => "juan",
			"clave"   => "12345",
			"nombre" => "Juan",
			"apellido" => "Perez"
		],
		[
			"usuario" => "pedro",
			"clave"   => "12345",
			"nombre" => "Pedro",
			"apellido" => "Chavez"
		],
		[
			"usuario" => "maria",
			"clave"   => "12345",
			"nombre" => "Maria",
			"apellido" => "Estevez"
		],
	];


	$usuario = $_POST['usuario'];
	$clave = $_POST['clave'];

	foreach($usuarios as $datos_usuario) {

		if($usuario == $datos_usuario["usuario"] && $clave == $datos_usuario["clave"]) {
			echo json_encode( $datos_usuario );
			die;
		}
	}

	echo json_encode( ["error" => 1] );
}