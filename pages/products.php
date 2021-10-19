<!DOCTYPE html>
<html lang="en">
<head>
    <base href="http://localhost/Typemaster/pages/"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/main.css">
    <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
    <script src="../assets/js/edit-user-table.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="../assets/img/logo.png">
    <title>Users</title>
</head>

<body>

<div class="product-grid">
    <header class="grid__row header">
        <div class="grid__col header__left-box">
            <a href="">
                <img src = "../assets/img/logo.png" alt = "Logo" class = "logo">
            </a>
        </div>
    </header>
    <div class="grid__row">
        <?php
        // create connection
        require_once("../classes/DbHandler.php");
        $conn = new DbHandler;
        $conn->readEntries('products');
        $conn->checkNumberOfEntries('products');
        ?>
    </div>

    <footer class="grid__row footer">
        <div class="grid__col footer_copy-right">
            <span class="bold">Typemaster 2021&nbsp;</span> | All Rights Reserved
        </div>
    </footer>
</div>
</body>
</html>