<?php
require_once("db_connection.php");

$conn = connection();



//echo $_POST = json_decode(file_get_contents('php://input'), true);


//<!--for (let i = 0, length = fieldsTest.length; i < length ; i++) {-->
//<!---->
//<!--}-->
//<!---->
//<!--    $fieldName = $_POST['fieldName'];-->
//<!--    $fieldValue = $_POST['fieldValue'];-->
//<!--    $id = $_POST['id'];-->
//<!---->
//<!--    $sql = "UPDATE users SET $fieldName = '$fieldValue' WHERE id = '$id'";-->
//<!--    $rs = mysqli_query($conn, $sql);-->

$conn->close();
