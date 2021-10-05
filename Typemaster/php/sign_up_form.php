<?php
// open connection
require_once("db_connection.php");
$conn = connection();

// on btn submit
if($_POST['btnSubmit']) {

    // map values of input fields to variables
    $username = $_POST['username'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_address = $_POST['email'];
    $tel_number = $_POST['tel_number'];
    $password = $_POST['password'];
    $birthdate = $_POST['year'] . '-' . $_POST['month'] . '-' . $_POST['day'];
    $gender = $_POST['gender'];

    // sql command - map columns in users table to values and insert a new entry
    $sql = "INSERT INTO users(`username`,`first_name`,`last_name`,`email_address`,`tel_number`,`password`,`birthdate`,`gender`) VALUES ('$username','$first_name','$last_name','$email_address','$tel_number','$password','$birthdate','$gender')";

    // send sql command via the connection to the server
    $rs = mysqli_query($conn, $sql);
}

    // close connection
    $conn->close();





