<?php
require_once("../classes/DbHandler.php");
require_once("../classes/User.php");
$conn = new User;
// Request Body = JSON -> transform to array
$content = json_decode(file_get_contents("php://input"), true);


////////////// CREATE USER
if($content['fetchType'] == 'createUser'){
    //////// PREPARE DATA ARRAY
    // remove action key/value pair
    array_shift($content);
    // remove checkbox value
    array_pop($content);
    // gather birthday inputs into a key value pair
    $birthdate = $content['year'] . '-' . str_pad($content['month'], 2, '0', STR_PAD_LEFT) . '-' . str_pad($content['day'], 2, '0', STR_PAD_LEFT);
    unset($content['year'],$content['month'],$content['day']);
    $content["birthdate"] = $birthdate;

    //////// EXECUTE FUNCTION
    if($conn->validateUser($content)){
        $conn->createEntry('users',$content);
    }

////////////// UPDATE USER
} elseif($content['fetchType'] == 'updateUser') {
    //////// PREPARE DATA ARRAY
    // remove action key/value pair
    array_shift($content);

    //////// EXECUTE FUNCTION

    if($conn->validateUser($content)){
        $conn->updateEntry('users',$content);
    }

////////////// DELETE ENTRY
} elseif($content['fetchType'] == 'deleteEntry') {
    //////// PREPARE DATA ARRAY
    // remove action key/value pair
    array_shift($content);

    //////// EXECUTE FUNCTION
    $conn->deleteEntry('users',$content);

}



