<?php
	$db = new mysqli('localhost', 'user', 'password', 'Catalog'); // set connection
	$remove = $_REQUEST['remove'];
	
	$db->close();
