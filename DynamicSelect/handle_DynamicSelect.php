<?php

    require $_SERVER['DOCUMENT_ROOT']."/API/sl/sldb.class.php";
    $SLDB = new SLDB();

	$selection = $_GET['selection'];
	
	// set query conditions
	$conditions['filters'] = array('machine_man0' => $selection);

	// fetch models
	$models_array = $SLDB -> read('idx_machines', $conditions);

	$return_array = json_encode($models_array);
	echo $return_array;

?>