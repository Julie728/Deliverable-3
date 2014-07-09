package com.bdd.rentcar;

public interface CarDAO {

    public void add(Car car);

    Car findAvailableCar();

    int getNumberOfAvailableCars();

	int getRevenue();

	int getCompanyAssets();
}