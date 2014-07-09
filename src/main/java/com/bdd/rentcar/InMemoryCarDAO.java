package com.bdd.rentcar;

import java.util.LinkedList;
import java.util.List;

public class InMemoryCarDAO implements CarDAO {
    private List<Car> cars = new LinkedList<Car>();

    public void add(Car car) {
        cars.add(car);
    }

    public Car findAvailableCar() {
        for (Car car : cars) {
            if (!car.isRented()) {
                return car;
            }
        }
        return null;
    }

    public int getNumberOfAvailableCars() {
        int availableCars = 0;
        for (Car car : cars) {
            if (!car.isRented()) {
                availableCars++;
            }
        }
        return availableCars;
    }
    
//    public void resetCars(){
//    	cars = null;
//    }
}