package com.bdd.rentcar;

import java.util.LinkedList;
import java.util.List;

public class InMemoryCarDAO implements CarDAO {
    private List<Car> cars = new LinkedList<Car>();
    private double revenue = 0;
    private final static int FEE = 10;
    private final static int CAR_VALUE = 12000;

    public void add(Car car) {
        cars.add(car);
    }

    public Car findAvailableCar() {
        for (Car car : cars) {
            if (!car.isRented()) {
            	revenue += FEE;
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
     

    public void setRevenueOfReturn (int feeCharge){
    	revenue = feeCharge;
    }
    
    public int getNumberOfCarsReturn(){
    	return (int) revenue/FEE;
    }
    
    public int getRevenue(){
    	return (int) revenue;
    }
    
    public int getCompanyAssets(){
    	return (int) (cars.size() * CAR_VALUE + revenue);
    }
}