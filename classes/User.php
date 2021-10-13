<?php

class User extends DbHandler
{

    // Add a new user to the users db
    public function createUser_OLD()
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

    public function validateUser($function) {

            try {
                $valid = true;
                // validate Function

                if ($valid) {
                    $this->$function('users');
                } else{
                    throw new Exception("Not valid");
                }
            } catch (Exception $e) {
                throw new Exception($e->getMessage());
            }
        }
}