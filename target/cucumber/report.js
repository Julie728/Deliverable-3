$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChargeFee.feature");
formatter.feature({
  "line": 1,
  "name": "Rental cars should bring revenue for the company",
  "description": "\nAs an owner of a car rental company\nI want charge fee for rented cars\nSo I can earn money",
  "id": "rental-cars-should-bring-revenue-for-the-company",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "charge for renting 2 cars",
  "description": "",
  "id": "rental-cars-should-bring-revenue-for-the-company;charge-for-renting-2-cars",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the beginning revenue is 0 and there are enough available cars",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I rent 2 cars to my customer",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the revenue should became 20",
  "keyword": "Then "
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
  "duration": 97022213,
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
  "duration": 419598,
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
  "duration": 7019662,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "charge for renting available cars if requested cars out number the available ones",
  "description": "",
  "id": "rental-cars-should-bring-revenue-for-the-company;charge-for-renting-available-cars-if-requested-cars-out-number-the-available-ones",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "the company have 5 cars available",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "10 cars were rented to customer",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the revenue should be counted for the available cars, which are 50",
  "keyword": "Then "
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
  "duration": 222780,
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
  "duration": 177801,
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
  "duration": 158783,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "get total assets of the company",
  "description": "",
  "id": "rental-cars-should-bring-revenue-for-the-company;get-total-assets-of-the-company",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the company have 10 cars and the begins at zero revenue",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "5 cars were rented",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the total assets of the company should became 120050",
  "keyword": "Then "
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
  "duration": 211309,
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
  "duration": 455521,
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
  "duration": 147916,
  "status": "passed"
});
formatter.uri("Rent.feature");
formatter.feature({
  "line": 1,
  "name": "Rental cars should be possible to rent",
  "description": "\nAs an owner of a car rental company\nI want to make cars available for renting\nSo I can rent them to clients",
  "id": "rental-cars-should-be-possible-to-rent",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Find and rent a car",
  "description": "",
  "id": "rental-cars-should-be-possible-to-rent;find-and-rent-a-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "there are 18 cars available for rental",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I rent 1 to my customer",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "there will only be 17 cars available for rental",
  "keyword": "Then "
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
  "duration": 199234,
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
  "duration": 124974,
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
  "duration": 159085,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Deny rent request when no available car",
  "description": "",
  "id": "rental-cars-should-be-possible-to-rent;deny-rent-request-when-no-available-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "all 6 cars has been rented to customers",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "another customer request to rent 1 car",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the request should be denied and there will still be 0 cars available",
  "keyword": "Then "
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
  "duration": 251155,
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
  "duration": 111691,
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
  "duration": 104447,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Not enough cars for rental",
  "description": "",
  "id": "rental-cars-should-be-possible-to-rent;not-enough-cars-for-rental",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "only 5 cars can be rented",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the customer requests to rent 7",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "sorry, there should be 2 more cars for rental",
  "keyword": "Then "
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
  "duration": 184442,
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
  "duration": 130709,
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
  "duration": 127087,
  "status": "passed"
});
formatter.uri("Return.feature");
formatter.feature({
  "line": 1,
  "name": "Customers could return rented cars",
  "description": "\r\nAs an owner of a car rental company\r\nI want to make rented cars available for returning\r\nSo I can rent them to other clients",
  "id": "customers-could-return-rented-cars",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Find and rent a car",
  "description": "",
  "id": "customers-could-return-rented-cars;find-and-rent-a-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "25 cars are available for rental",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "cumstomer returns 3 cars",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "there will be 28 cars available for rental",
  "keyword": "Then "
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
  "duration": 272588,
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
  "duration": 139464,
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
  "duration": 172065,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Return cars to make them available",
  "description": "",
  "id": "customers-could-return-rented-cars;return-cars-to-make-them-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "1 cars are available in stock previously",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "one customer requests to rent 4 and another customer returns 5",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the customer can successfully rent cars and there will still be 2 car available",
  "keyword": "Then "
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
  "duration": 167235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 61
    }
  ],
  "location": "RentStepdefs.one_customer_requests_another_customer_returns(int,int)"
});
formatter.result({
  "duration": 163915,
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
  "duration": 107767,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Return correct number of cars",
  "description": "",
  "id": "customers-could-return-rented-cars;return-correct-number-of-cars",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the revenue of charging one customer was 70 previously",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the customer returns 5 cars",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "there are 2 more cars should be returned",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 41
    }
  ],
  "location": "RentStepdefs.the_revenue_of_charging_one_customer_previously(int)"
});
formatter.result({
  "duration": 195007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    }
  ],
  "location": "RentStepdefs.the_customer_returns_cars(int)"
});
formatter.result({
  "duration": 144293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "RentStepdefs.there_are_more_cars_should_be_returned(int)"
});
formatter.result({
  "duration": 152745,
  "status": "passed"
});
});