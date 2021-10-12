<?php

// get Request from JS Promise - decode JS Object
// the JS Object contains key/value pairs for every column in the users table
$content = json_decode(file_get_contents("php://input"));

/////////////////////
// validate functions

// validate username
if(!strlen($content->username) >1){
    $errMsg = "Error at " . $content->username . ". Please enter at least two characters for the username.";
    print $errMsg;
    exit();
}
// validate first_name
if(!strlen($content->first_name) >1){
    $errMsg = "Please enter at least two characters for the first Name.";
    print $errMsg;
    exit();
}
//validate last_name
if(!strlen($content->last_name) >1){
    $errMsg = "Please enter at least two characters for the last name.";
    print $errMsg;
    exit();
}
//validateEmailAddress
if(!preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/",$content->email_address)) {
    $errMsg = "Please enter a valid Email Address.";
    print $errMsg;
    exit();
}
//validateTelNumber
if(!preg_match("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im",$content->tel_number)) {
    $errMsg = "Please enter a valid Telephone Number.";
    print $errMsg;
    exit();
}
//validate password
if ( (!strlen($content->password) > 7) && (!preg_match("/.*[0-9].*/",$content->password)) ) {
    $errMsg = "Please enter a password with at least 8 characters.";
    print $errMsg;
    exit();
}
//validate Birthdate
if (!preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$content->birthdate)) {
    $errMsg = "Please enter a valid Birthdate";
    print $errMsg;
    exit();
}
//validate Gender
if ( !(($content->gender == "male") || ($content->gender == "female") || ($content->gender == "diverse")) ){
    $errMsg = "Please enter male, female or diverse as the gender";
    print $errMsg;
    exit();
}

// target by key name -> id and get its value
$id = $content->id;

// open connection
require_once("DbHandler.php");
$conn = connection();

if(!$conn) {
    $errMsg = "Connection to the Webserver failed";
    print $errMsg;
    exit();
}

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

