package com.bdd.rentcar;

public class Car {
    private boolean rented;

    public void rent() {
        rented = true;
    }

    public boolean isRented() {
        return rented;
    }
}