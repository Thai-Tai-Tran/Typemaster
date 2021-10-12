<?php

class User extends DbHandler
{

    // Add a new user to the users db
    public function signUp()
    {
        try {
            $statement =
                "INSERT INTO users (`username`,`first_name`,`last_name`,`email_address`,`tel_number`,`password`,`birthdate`,`gender`);
                VALUES(`:username`,`:first_name`,`:last_name`,`:email_address`,`:tel_number`,`:password`,`:birthdate`,`:gender`)";

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
    public function checkUserNumber(){
        try{

            $statement = "SELECT COUNT(*) FROM users";
            $result = $this->executeStatement( $statement );

            exit(json_encode($result));

        }catch(Exception $e){
//            throw new Exception($e->getMessage());
        }
    }



    // Updates a user in users table
    public function updateUsers(){
        try{
                // get Request from JS Promise - decode JS Object
                // the JS Object contains key/value pairs for every column in the users table
                $content = json_decode(file_get_contents("php://input"));

                $keyPlaceholderPairs = [];
                foreach ($content as $key => $val) {
                    $keyPlaceholderPairs .= $key."=':".$key."', ";
                }

                $statement = "UPDATE users SET ".$keyPlaceholderPairs." WHERE id = "."':id'";

                $parameters = [':id' => $content->id];
                foreach ($content as $key => $val) {
                    $parameters .= ":".$key." => '".$val."', ";
                }

                $this->executeStatement( $statement , $parameters );

        }catch(Exception $e){
            throw new Exception($e->getMessage());
        }
    }


    // Delete a user in users table
    public function deleteUser(){
        try{

            // sql command - delete entry in the users table -> the row with the specified id
            $statement = "DELETE FROM users WHERE id = ':id'";
            // get Request from JS Promise - decode JS Object
            // the JS Object only contains the id
            $parameters = [':id' => json_decode(file_get_contents("php://input"))];

            $this->executeStatement( $statement , $parameters );

        }catch(Exception $e){
            throw new Exception($e->getMessage());
        }
    }


}