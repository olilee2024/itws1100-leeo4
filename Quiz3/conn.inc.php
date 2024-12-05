<?php
// Define global variables for the MySQL connection
global $db_server, $db_user, $db_password, $db_name;

$db_user = "phpmyadmin"; // Your database username
$db_password = "Teemomoose2006!"; // Your database password
$db_database = "mySite"; // Your database name
$db_server = "localhost"; // Your database server (usually 'localhost')

// Create the connection using mysqli
$conn = new mysqli($db_server, $db_user, $db_password, $db_name);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Uncomment the line below for debugging purposes
echo "Connected successfully";
?>