package com.bdd.rentcar;

import java.util.LinkedList;
import java.util.List;

public class InMemoryCarDAO implements CarDAO {
    private static List<Car> cars;

    public InMemoryCarDAO() {
        if (cars == null) {
            cars = new LinkedList<Car>();
        }
    }

    public void add(Car car) {
        cars.add(car);
    }

    public Car findAvailableCar() {
        for (Car car : cars) {
            if (!car.isRented()) {
                return car;
            }
        }
        throw new RuntimeException("No car available");
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
}