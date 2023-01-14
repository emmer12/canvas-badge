<?php

$hn = 'localhost';
$db = 'badge';
$un = 'root';
$pw = '';


$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die($conn->connect_error);
