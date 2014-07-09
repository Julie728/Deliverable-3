package com.bdd.rentcar;

public class RentACarSupport {
    private CarDAO carDatabase;

    public void createCars(int availableCars) {
        carDatabase = new InMemoryCarDAO();
        for (int i = 0; i < availableCars; i++) {
            Car car = new Car();
            carDatabase.add(car);
        }
    }

//    public void rentACar() {
//        Car car = carDatabase.findAvailableCar();
//        if(car != null){
//        	car.rent();
//        }  
//    }
    public void rentCars(int rentCars) {
    	for(int i = 0; i< rentCars; i++){
            Car car = new Car();
            car = carDatabase.findAvailableCar();
            if (car == null) {
            	break;
            }
			car.rent();
    	}

    }

    public int getAvailableNumberOfCars() {
        return carDatabase.getNumberOfAvailableCars();
    }
    
    public int getRevenue() {
        return carDatabase.getRevenue();
    }
    
    public int getCompanyAssets(){
    	return carDatabase.getCompanyAssets();
    }
}