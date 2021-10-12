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

    // Show all entries + column heads + edit and delete button from a table
    public function showAll($table){
        try{

            // get results from first row (column heads)
            $statement = "SELECT * FROM ".$table." LIMIT 0";
            $resultHead = $this->executeStatement( $statement );#
            // get results from the rest of the table
            $statement = "SELECT * FROM ".$table;
            $resultRest = $this->executeStatement( $statement );


            // open container div for the table
            echo '<div class="table">';

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
                echo "<span class='table__btn-container'><button class='btn--blue rounded-sm edit-btn' data-row-id=" . $row['id'] .">Edit</button><button class='btn--orange rounded-sm del-btn' data-row-id=" . $row['id'] .">Delete</button></span>";
            }

            // close container div for the table
            echo "</div>";

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

