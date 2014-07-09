package com.bdd.rentcar;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class RentStepdefs {
    private RentACarSupport rentACarSupport;

    @Given("^there are (\\d+) cars available for rental$")
    public void there_are_cars_available_for_rental(int availableCars) throws Throwable {
    	rentACarSupport = new RentACarSupport();
        rentACarSupport.createCars(availableCars);
    }

    @When("^I rent one to my customer$")
    public void i_rent_one_to_my_customer() throws Throwable {
        rentACarSupport.rentACar();
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
        for(int i = 0; i < num; i ++){
        	rentACarSupport.rentACar();
        }
        assertThat(rentACarSupport.getAvailableNumberOfCars(), is(0));
    }

    @When("^another customer request to rent a car$")
    public void another_customer_request_to_rent_a_car() throws Throwable {
    	rentACarSupport.rentACar();
    }

    @Then("^the request should be denied and there will still be (\\d+) cars available$")
    public void the_request_should_be_denied_and_there_will_still_be_cars_available(int num) throws Throwable {
    	int actualAvailableCars = rentACarSupport.getAvailableNumberOfCars();
        assertThat(actualAvailableCars, is(num));
    }

    

}