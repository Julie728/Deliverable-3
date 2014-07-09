package com.bdd.rentcar;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertFalse;


public class RentStepdefs {
    private RentACarSupport rentACarSupport;

    @Given("^there are (\\d+) cars available for rental$")
    public void there_are_cars_available_for_rental(int availableCars) throws Throwable {
    	rentACarSupport = new RentACarSupport();
        rentACarSupport.createCars(availableCars);
    }

    @When("^I rent (\\d+) to my customer$")
    public void i_rent_to_my_customer(int rentCars) throws Throwable {
        rentACarSupport.rentCars(rentCars);
    }

    @Then("^there will only be (\\d+) cars available for rental$")
    public void there_will_be_less_cars_available_for_rental(int expectedAvailableCars) throws Throwable {
        int actualAvailableCars = rentACarSupport.getAvailableNumberOfCars();
        assertThat(actualAvailableCars, is(expectedAvailableCars));
    }
    
    @Given("^all (\\d+) cars has been rented to customers$")
    public void all_cars_has_been_rented_to_customers(int num) throws Throwable {
    	rentACarSupport = new RentACarSupport();
    	rentACarSupport.createCars(num);
//        for(int i = 0; i < num; i ++){
//        	rentACarSupport.rentACar();
//        }
    	rentACarSupport.rentCars(num);
        assertThat(rentACarSupport.getAvailableNumberOfCars(), is(0));
    }

    @When("^another customer request to rent (\\d+) car$")
    public void another_customer_request_to_rent_car(int rentCars) throws Throwable {
    	rentACarSupport.rentCars(rentCars);
    }

    @Then("^the request should be denied and there will still be (\\d+) cars available$")
    public void the_request_should_be_denied_and_there_will_still_be_cars_available(int num) throws Throwable {
    	int actualAvailableCars = rentACarSupport.getAvailableNumberOfCars();
        assertThat(actualAvailableCars, is(num));
    }
    
    @Given("^the beginning revenue is (\\d+) and there are enough available cars$")
    public void the_beginning_revenue_is_and_there_are_enough_available_cars(int arg1) throws Throwable {
    	rentACarSupport = new RentACarSupport();
    	rentACarSupport.createCars(100);
    }

    @When("^I rent (\\d+) cars to my customer$")
    public void i_rent_cars_to_my_customer(int num) throws Throwable {
//        for(int i = 0; i < num; i++){
        	rentACarSupport.rentCars(num);
//    }	
    }

    @Then("^the revenue should became (\\d+)$")
    public void the_revenue_should_became(int amt) throws Throwable {
    	int revenue = rentACarSupport.getRevenue();
    	assertThat(revenue, is(amt));
    }

    @Given("^the company have (\\d+) cars and the begins at zero revenue$")
    public void the_company_have_cars_and_the_begins_at_zero_revenue(int arg1) throws Throwable {
    	rentACarSupport = new RentACarSupport();
    	rentACarSupport.createCars(10);
    }

    @When("^(\\d+) cars were rented$")
    public void cars_were_rented(int num) throws Throwable {
//    	for(int i = 0; i < num; i++){
        	rentACarSupport.rentCars(num);
//        } 
    }

    @Then("^the total assets of the company should became (\\d+)$")
    public void the_total_assets_of_the_company_should_became(int amt) throws Throwable {
    	int assets = rentACarSupport.getCompanyAssets();
    	assertThat(assets, is(amt));
    }
    
    @Given("^the company have (\\d+) cars available$")
    public void the_company_have_cars_available(int num) throws Throwable {
    	rentACarSupport = new RentACarSupport();
    	rentACarSupport.createCars(num);
    }

    @When("^(\\d+) cars were rented to customer$")
    public void cars_were_rented_to_customer(int num) throws Throwable {
//    	for(int i = 0; i < num; i++){
        	rentACarSupport.rentCars(num);
//        }
    }

    @Then("^the revenue should be counted for the available cars, which are (\\d+)$")
    public void the_revenue_should_be_counted_for_the_available_cars_which_are(int amt) throws Throwable {
    	int revenue = rentACarSupport.getRevenue();
    	assertThat(revenue, is(amt));
    }
    
//    Given only 5 cars can be rented
//    When one customer requests to rent 7 car
//    Then sorry, there are less than 7 cars for rental
    
    @Given("^only (\\d+) cars can be rented$")
    public void only_cars_can_be_rented(int availableCars) throws Throwable {
    	rentACarSupport = new RentACarSupport();
        rentACarSupport.createCars(availableCars);
    }

    @When("^one customer requests to rent (\\d+) car$")
    public void one_customer_requests_to_rent_cars(int rentCars) throws Throwable {
        rentACarSupport.rentCars(rentCars);
    }

    @Then("^sorry, there should be (\\d+) more cars for rental$")
    public void there_are_less_than_cars_for_rental(int moreCars) throws Throwable {
        int actualAvailableCars = rentACarSupport.getAvailableNumberOfCars();
        assertFalse(actualAvailableCars >= moreCars);
    }
}