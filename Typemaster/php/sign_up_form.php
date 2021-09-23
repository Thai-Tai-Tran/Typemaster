<?php

require_once("db_connection.php");

$conn = connection();

if($_POST['btnSubmit']) {
    // collect value of input field
    $username = $_POST['username'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_address = $_POST['email'];
    $tel_number = $_POST['tel_number'];
    $password = $_POST['password'];
    $birthdate = $_POST['year'] . '-' . $_POST['month'] . '-' . $_POST['day'];
    $gender = $_POST['gender'];

    $sql = "INSERT INTO users(`username`,`first_name`,`last_name`,`email_address`,`tel_number`,`password`,`birthdate`,`gender`) VALUES ('$username','$first_name','$last_name','$email_address','$tel_number','$password','$birthdate','$gender')";
    $rs = mysqli_query($conn, $sql);

}

$conn->close();



?>



