package com.bdd.rentcar;

public interface CarDAO {

    public void add(Car car);

    Car findAvailableCar();
    
    int getNumberOfAvailableCars();

    void setRevenueOfReturn (int feeCharge);
    
    int getNumberOfCarsReturn();
    
	int getRevenue();

	int getCompanyAssets();
}