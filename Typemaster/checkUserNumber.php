<?php

require_once ("db_connection.php");

$conn = connection();

// FETCH DATA
$sql = mysqli_query($conn, "SELECT COUNT(*) FROM users");

// STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));