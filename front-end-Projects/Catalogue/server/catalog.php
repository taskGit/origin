<?php
	header("Content-Type: application/json; charset=UTF-8");

	$db = new mysqli('localhost', 'user', 'password', 'Catalog'); // set connection
	$result = $db->query("SELECT * FROM catalog_list"); // set queries selecting table
	$content = array(); 

	while($row = $result->fetch_array()) { // fetch content from table
		$content[] = $row; // and equate to array	
	}

	echo json_encode($content); // convert data to JSON encoded
	$db->close();
	
