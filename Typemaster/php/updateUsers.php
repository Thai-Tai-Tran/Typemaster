<?php

// open connection
require_once("db_connection.php");
$conn = connection();

// get Request from JS Promise - decode JS Object
// the JS Object contains key/value pairs for every column in the users table
$content = json_decode(file_get_contents("php://input"));

// target by key name -> id and get its value
$id = $content->id;

// loop through each key value pair in the object
foreach ($content as $key => $val) {

    // sql command - update the users table -> at the column named after the key name
    // -> set the value to the value of the key/value pair -> for the row with the specified id
    $sql = "UPDATE users SET ".$key. "="."'".$val."'"." WHERE id = "."'".$id."'";

    // send sql command via the connection to the server
    $rs = mysqli_query($conn, $sql);

}
// close connection
$conn->close();
