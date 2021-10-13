<?php

class Product extends DbHandler
{
    public function validateProduct($function) {

        try {
            $valid = true;
            // validate Function

            if ($valid) {
                $this->$function('products');
            } else{
                throw new Exception("Not valid");
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

}