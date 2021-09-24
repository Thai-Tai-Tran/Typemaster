<?php

require_once("db_connection.php");

$conn = connection();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $sql = "DELETE FROM users WHERE id = '$id'";
    $rs = mysqli_query($conn, $sql);
}

$conn->close();