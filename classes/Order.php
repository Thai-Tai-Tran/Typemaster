<?php

class Order extends DbHandler
{
    public function validateOrder($function) {

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