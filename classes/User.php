<?php

class User extends DbHandler
{

    public function validateUser($content) {

            try {
                $valid = true;
                $validationErrors = [];

                ///////////////////// validate functions
                // validate username
                if(!(strlen($content['username']) >1)) {
                    echo $content['username'];
                    $valid = false;
                    $validationErrors[] = "Please enter at least two characters for the username.";
                }
                // validate first_name
                if(!(strlen($content['first_name']) >1)) {
                    $valid = false;
                    $validationErrors[] = "Please enter at least two characters for the first name.";
                }
                // validate last_name
                if(!(strlen($content['last_name']) >1)) {
                    $valid = false;
                    $validationErrors[] = "Please enter at least two characters for the last name.";
                }
                // validateEmailAddress
                if(!(preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/",$content['email_address']))) {
                    $valid = false;
                    $validationErrors[] = "Please enter a valid Email Address.";

                }
                // validateTelNumber
                if(!(preg_match("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im",$content['tel_number']))) {
                    $valid = false;
                    $validationErrors[] =  "Please enter a valid Telephone Number.";

                }
                // validate password
                if (!(strlen($content['password']) > 7) && !(preg_match("/.*[0-9].*/",$content['password']))) {
                    $valid = false;
                    $validationErrors[] = "Please enter a password with at least 8 characters.";

                }
                // validate Birthdate
                if (!(preg_match("/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/",$content['birthdate']))) {
                    $valid = false;
                    $validationErrors[] = "Please enter a valid Birthdate.";

                }
                // validate Gender
                if ( !(($content['gender'] == "male") || ($content['gender'] == "female") || ($content['gender'] == "diverse")) ){
                    $valid = false;
                    $validationErrors[] = "Please enter male, female or diverse as the gender";

                }

                if ($valid) {
                    return true;
                } else{
                    echo implode("\r\n",$validationErrors);
                    return false;
                }
            } catch (Exception $e) {
//                echo new Exception($e->getMessage());
            }
        }
}