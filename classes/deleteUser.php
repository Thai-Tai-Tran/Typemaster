<?php

// open connection
require_once("DbHandler.php");
$conn = connection();

if(!$conn) {
    $errMsg = "Connection to the Webserver failed";
    print $errMsg;
    exit();
}

// get Request from JS Promise - decode JS Object
// the JS Object only contains the id
$id = json_decode(file_get_contents("php://input"));

// sql command - delete entry in the users table -> the row with the specified id
$sql = "DELETE FROM users WHERE id = "."'".$id."'";

// send sql command via the connection to the server
$rs = mysqli_query($conn, $sql);

// close connection
$conn->close();