$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChargeFee.feature");
formatter.feature({
  "id": "rental-cars-should-bring-revenue-for-the-company",
  "description": "\nAs an owner of a car rental company\nI want charge fee for rented cars\nSo I can earn money",
  "name": "Rental cars should bring revenue for the company",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "rental-cars-should-bring-revenue-for-the-company;charge-for-renting-2-cars",
  "description": "",
  "name": "charge for renting 2 cars",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "the beginning revenue is 0 and there are enough available cars",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I rent 2 cars to my customer",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "the revenue should became 20",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "RentStepdefs.the_beginning_revenue_is_and_there_are_enough_available_cars(int)"
});
formatter.result({
  "duration": 138983000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    }
  ],
  "location": "RentStepdefs.i_rent_cars_to_my_customer(int)"
});
formatter.result({
  "duration": 378000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 26
    }
  ],
  "location": "RentStepdefs.the_revenue_should_became(int)"
});
formatter.result({
  "duration": 5281000,
  "status": "passed"
});
formatter.scenario({
  "id": "rental-cars-should-bring-revenue-for-the-company;charge-for-renting-available-cars-if-requested-cars-out-number-the-available-ones",
  "description": "",
  "name": "charge for renting available cars if requested cars out number the available ones",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "the company have 5 cars available",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "10 cars were rented to customer",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "the revenue should be counted for the available cars, which are 50",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "RentStepdefs.the_company_have_cars_available(int)"
});
formatter.result({
  "duration": 198000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 0
    }
  ],
  "location": "RentStepdefs.cars_were_rented_to_customer(int)"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 64
    }
  ],
  "location": "RentStepdefs.the_revenue_should_be_counted_for_the_available_cars_which_are(int)"
});
formatter.result({
  "duration": 151000,
  "status": "passed"
});
formatter.scenario({
  "id": "rental-cars-should-bring-revenue-for-the-company;get-total-assets-of-the-company",
  "description": "",
  "name": "get total assets of the company",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "the company have 10 cars and the begins at zero revenue",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "5 cars were rented",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "the total assets of the company should became 120050",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    }
  ],
  "location": "RentStepdefs.the_company_have_cars_and_the_begins_at_zero_revenue(int)"
});
formatter.result({
  "duration": 256000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 0
    }
  ],
  "location": "RentStepdefs.cars_were_rented(int)"
});
formatter.result({
  "duration": 174000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120050",
      "offset": 46
    }
  ],
  "location": "RentStepdefs.the_total_assets_of_the_company_should_became(int)"
});
formatter.result({
  "duration": 139000,
  "status": "passed"
});
formatter.uri("Rent.feature");
formatter.feature({
  "id": "rental-cars-should-be-possible-to-rent",
  "description": "\nAs an owner of a car rental company\nI want to make cars available for renting\nSo I can rent them to clients",
  "name": "Rental cars should be possible to rent",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "rental-cars-should-be-possible-to-rent;find-and-rent-a-car",
  "description": "",
  "name": "Find and rent a car",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "there are 18 cars available for rental",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I rent 1 to my customer",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "there will only be 17 cars available for rental",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 10
    }
  ],
  "location": "RentStepdefs.there_are_cars_available_for_rental(int)"
});
formatter.result({
  "duration": 195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "RentStepdefs.i_rent_to_my_customer(int)"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 19
    }
  ],
  "location": "RentStepdefs.there_will_be_less_cars_available_for_rental(int)"
});
formatter.result({
  "duration": 224000,
  "status": "passed"
});
formatter.scenario({
  "id": "rental-cars-should-be-possible-to-rent;deny-rent-request-when-no-available-car",
  "description": "",
  "name": "Deny rent request when no available car",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "all 6 cars has been rented to customers",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "another customer request to rent 1 car",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "the request should be denied and there will still be 0 cars available",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 4
    }
  ],
  "location": "RentStepdefs.all_cars_has_been_rented_to_customers(int)"
});
formatter.result({
  "duration": 225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "RentStepdefs.another_customer_request_to_rent_car(int)"
});
formatter.result({
  "duration": 120000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 53
    }
  ],
  "location": "RentStepdefs.the_request_should_be_denied_and_there_will_still_be_cars_available(int)"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.scenario({
  "id": "rental-cars-should-be-possible-to-rent;not-enough-cars-for-rental",
  "description": "",
  "name": "Not enough cars for rental",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "only 5 cars can be rented",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "the customer requests to rent 7",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "sorry, there should be 2 more cars for rental",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 5
    }
  ],
  "location": "RentStepdefs.only_cars_can_be_rented(int)"
});
formatter.result({
  "duration": 269000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 30
    }
  ],
  "location": "RentStepdefs.one_customer_requests_to_rent_cars(int)"
});
formatter.result({
  "duration": 475000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "RentStepdefs.there_are_less_than_cars_for_rental(int)"
});
formatter.result({
  "duration": 320000,
  "status": "passed"
});
formatter.uri("Return.feature");
formatter.feature({
  "id": "the-rented-cars-could-be-returned",
  "description": "\nAs an owner of a car rental company\nI want to make rented cars to be returned\nSo I can continue to rent cars to other customers",
  "name": "The rented cars could be returned",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "the-rented-cars-could-be-returned;respond-to-return-cars",
  "description": "",
  "name": "Respond to return cars",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "25 cars are available for rental",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "cumstomer returns 3 cars",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "there will be 28 cars available for rental",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 0
    }
  ],
  "location": "RentStepdefs.cars_are_available_for_rental(int)"
});
formatter.result({
  "duration": 282000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "RentStepdefs.customer_returns_cars(int)"
});
formatter.result({
  "duration": 178000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 14
    }
  ],
  "location": "RentStepdefs.there_will_be_more_cars_available_for_rental(int)"
});
formatter.result({
  "duration": 201000,
  "status": "passed"
});
formatter.scenario({
  "id": "the-rented-cars-could-be-returned;available-when-cars-are-returned",
  "description": "",
  "name": "Available when cars are returned",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "1 cars are available in stock previously",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "one customer requests to rent 3 and another customer returns 4",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "the customer can successfully rent cars and there will still be 2 car available",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 0
    }
  ],
  "location": "RentStepdefs.cars_are_available_in_stock_previously(int)"
});
formatter.result({
  "duration": 303000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 61
    }
  ],
  "location": "RentStepdefs.one_customer_requests_another_customer_returns(int,int)"
});
formatter.result({
  "duration": 287000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 64
    }
  ],
  "location": "RentStepdefs.can_successfully_rent_cars_and_still_available_cars(int)"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
});