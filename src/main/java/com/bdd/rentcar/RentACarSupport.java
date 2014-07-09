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

    public void returnCars(int returnCars) {
        for (int i = 0; i < returnCars; i++) {
            Car car = new Car();
            carDatabase.add(car);
        }
    }

    public void rentCars(int rentCars) {
    	for(int i = 0; i< rentCars; i++){
            Car car = carDatabase.findAvailableCar();
            if (car == null) {
            	break;
            }
			car.rent();
    	}

    }
    
    public void setRevenueOfReturn(int feeCharge){
    	carDatabase = new InMemoryCarDAO();
    	carDatabase.setRevenueOfReturn(feeCharge);
        }
    	
    public int getNumberOfCarsReturn() {
    	return carDatabase.getNumberOfCarsReturn();
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