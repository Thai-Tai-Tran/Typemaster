<?php
require_once("db_connection.php");

$conn = connection();

    $fieldName = $_POST['fieldName'];
    $fieldValue = $_POST['fieldValue'];
    $id = $_POST['id'];

    $sql = "UPDATE users SET $fieldName = '$fieldValue' WHERE id = '$id'";
    $rs = mysqli_query($conn, $sql);

$conn->close();
