<!DOCTYPE html>
<html lang="en">
<head>
    <base href="http://localhost/Typemaster/Typemaster/" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="img/logo.png">
    <title>Users</title>
</head>

<body>

<div class="user-grid">
    <header class="grid__row header">
        <div class="grid__col header__left-box">
            <a href="">
                <img src = "img/logo.png" alt = "Logo" class = "logo">
            </a>
        </div>
    </header>
<div class="grid__row users">
    <?php
    // create connection
    require_once("php/db_connection.php");
    $conn = connection();


    // get results from database
    $result = mysqli_query($conn,"SELECT * FROM users");
    $all_properties = array();  //declare an array for saving properties

    // open container div for the table
    echo '<div class="user-table">';
    // loop through all column heads
    while ($property = mysqli_fetch_field($result)) {
        echo '<span class="column-head">' . $property->name . '</span>';  // add columns heads to table
        array_push($all_properties, $property->name);  //save those to array
    }

    // add edit/delete column head
    echo '<span class="column-head">Edit</span>';

    // looping through every row in the table
    while ($row = mysqli_fetch_array($result)) {

        // looping through all columns
        foreach ($all_properties as $item) {

            // add column entries for every row to table - add row id and the column name to each item
            echo '<span data-row-id=' . $row["id"] . ' data-field-name='. $item .'>' . $row[$item] . '</span>';
        }
        // add edit/delete buttons with row ids to the table
        echo "<span class='user-table__btn-container'><button class='btn--blue rounded-sm edit-btn' data-row-id=" . $row['id'] .">Edit</button><button class='btn--orange rounded-sm del-btn' data-row-id=" . $row['id'] .">Delete</button></span>";

    }
    echo "</div>";
    ?>
</div>

    <footer class="grid__row footer">
        <div class="grid__col footer_copy-right">
            <span class="bold">Typemaster 2021&nbsp;</span> | All Rights Reserved
        </div>
    </footer>
</div>

<script src="js/edit-user-table.js"></script>
</body>
</html>