<?php
require_once("../classes/DbHandler.php");
require_once("../classes/User.php");
$conn = new User;
// Request Body = JSON -> transform to array
$content = json_decode(file_get_contents("php://input"), true);

if($content['action'] == 'createUser'){
//    $conn->validateUser($conn->createEntry('users'));
    $conn->createEntry('users');
} elseif($content['action'] == 'updateUser') {
//    $conn->validateUser($conn->updateEntry('users', $content));
//    $conn->updateEntry('users');

    // remove action key/value pair
    array_shift($content);
    $parameters = array();
    foreach ($content as $key => $val) {
        if ($key === array_key_last($content)){
            $parameters[] = ":".$key." => '".$val."' ";
        }else {
            $parameters[] = ":".$key." => '".$val."', ";
        }
    }

//echo implode("", $parameters);

// remove id from the array
    array_pop($content);

    $keyPlaceholderPairs = array();
    foreach($content as $key=>$value) {
        if ($key === array_key_last($content)){
            $keyPlaceholderPairs[] = $key."=':".$key."' ";
        }else {
            $keyPlaceholderPairs[] = $key."=':".$key."', ";
        }
    }

    $statement = "UPDATE users SET ".implode("", $keyPlaceholderPairs)." WHERE id = "."':id'";
//echo implode("", $keyPlaceholderPairs);
    $stmt = $conn->openConn()->prepare($statement);
    print_r($stmt);
    echo "<br />";
    print_r($parameters);

} elseif($content['action'] == 'deleteEntry') {
    // remove action key/value pair
    array_shift($content);
    $conn->deleteEntry('users',$content);

}






