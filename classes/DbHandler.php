<?php
class DbHandler{

    // Methods
    // Constructor
    public function __construct() {
        // this function is called everytime this class is instantiated
        // $this->openConn();
    }

    public function openConn(){
        $servername = "localhost";
        $userName = "root";
        $password = "";
        $dbName = "typemaster";
        $charset = "utf8mb4";
        try {
            // $dsn = data source name
            // driver(mysql) find out db driver: inside of a "page.php" -> print:r(PDO::getAvailableDrivers());
            $dsn = "mysql:host=". $servername .";dbname=". $dbName .";charset=". $charset;
            $pdo = new PDO($dsn, $userName, $password);
            //check for errors and throw an Exception
            $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $pdo;

        }catch(Exception $e){
            echo Exception($e->getMessage());
        }

    }

    public function createEntry($table)
    {
        try {

            $keys = [];
            $placeholders = [];
            foreach ($_POST as $key) {
                $keys .= "'".$key."', ";
                $placeholders .= "':".$key."', ";
            }

            $parameters = [];
            foreach ($_POST as $key => $val) {
                $parameters .= ":".$key." => '".$val."', ";
            }

            $statement =
                "INSERT INTO ".$table." (".$keys.")
                VALUES(".$placeholders.")";

            // map values of input fields to variables
            $username = $_POST['username'];
            $first_name = $_POST['first_name'];
            $last_name = $_POST['last_name'];
            $email_address = $_POST['email'];
            $tel_number = $_POST['tel_number'];
            $password = $_POST['password'];
            $birthdate = $_POST['year'] . '-' . $_POST['month'] . '-' . $_POST['day'];
            $gender = $_POST['gender'];

            // map input variables to statement placeholders
            $parameters = [
                `:username` => $username,
                `:first_name` => $first_name,
                `:last_name` => $last_name,
                `:email_address` => $email_address,
                `:tel_number` => $tel_number,
                `:password` => $password,
                `:birthdate` => $birthdate,
                `:gender` => $gender
            ];

            $this->executeStatement($statement, $parameters);
            return $this->openConn()->lastInsertId();

        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }


    // Show all entries + column heads + edit and delete button from a table
    public function readEntries($table){
        try{

            // get results from first row (column heads)
            $statement = "SELECT * FROM ".$table." LIMIT 0";
            $resultHead = $this->executeStatement( $statement );#
            // get results from the rest of the table
            $statement = "SELECT * FROM ".$table;
            $resultRest = $this->executeStatement( $statement );


            // open container div for the table
            echo '<div class="rud-table">';

            // declare an array for saving all column heads/names
            $colHeads = [];

            // loop through all column heads
            for ($i = 0; $i < $resultHead->columnCount(); $i++) {
                $colHead = $resultHead->getColumnMeta($i);
                $colHeads[] = $colHead['name'];
            }
            foreach($colHeads as $value) {
                echo '<span class="column-head">' . $value . '</span>';  // add columns heads to table
            }

            // add edit/delete column head
            echo '<span class="column-head">Edit</span>';

            // loop through every row of the rest of the table
            foreach($resultRest as $row){
                // loop through every column for each row
                foreach ($colHeads as $colHead) {
                    // add column entries for every row to table - add row id and the column name to each item
                    echo '<span data-row-id=' . $row["id"] . ' data-field-name='. $colHead .'>' . $row[$colHead] . '</span>';
                }
                // add edit/delete buttons with row ids at the end of each row
                echo "<span class='rud-table__btn-container'><button class='btn--blue rounded-sm edit-btn' data-row-id=" . $row['id'] .">Edit</button><button class='btn--orange rounded-sm del-btn' data-row-id=" . $row['id'] .">Delete</button></span>";
            }

            // close container div for the table
            echo "</div>";

        }catch(Exception $e){
//            throw new Exception($e->getMessage());

        }
    }

    // Updates an entry in a table
    public function updateEntry($table, $content){
        try{

            $parameters = array();
            foreach ($content as $key => $val) {
                if ($key === array_key_last($content)){
                    $parameters[] = ":".$key." => '".$val."' ";
                }else {
                    $parameters[] = ":".$key." => '".$val."', ";
                }
            }

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

            $statement = "UPDATE ".$table." SET ".implode("", $keyPlaceholderPairs)." WHERE id = "."':id'";

            $this->executeStatement( $statement , $parameters );

        }catch(Exception $e){
            echo new Exception($e->getMessage());

        }
    }

    // Delete an entry in a table
    public function deleteEntry($table,$content){
        try{

            // sql command - delete entry in the users table -> the row with the specified id
            $statement = "DELETE FROM ".$table." WHERE id = ':id'";
            // get Request from JS Promise - decode JS Object
            // the JS Object only contains the id
            $parameters = [':id' => $content['id']];

            $this->executeStatement( $statement , $parameters );

        }catch(Exception $e){
            echo new Exception($e->getMessage());
        }
    }

    // Check the number of entries in a table
    public function checkNumberOfEntries($table){
        try{

            $statement = "SELECT COUNT(*) FROM ".$table;
            $result = $this->executeStatement( $statement );

            exit(json_encode($result));

        }catch(Exception $e){
//            throw new Exception($e->getMessage());
        }
    }

    // Execute prepared statement
    protected function executeStatement($statement = "", $parameters = [])
    {
        try {

            $stmt = $this->openConn()->prepare($statement);
            $stmt->execute($parameters);
            return $stmt;

        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

}

