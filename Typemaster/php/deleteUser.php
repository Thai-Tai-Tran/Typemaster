<?php

require_once("db_connection.php");

$conn = connection();


    $id = $_POST['id'];

    $sql = "DELETE FROM users WHERE id = '$id'";
    $rs = mysqli_query($conn, $sql);


$conn->close();