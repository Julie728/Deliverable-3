Feature: Customers could return rented cars

  As an owner of a car rental company
  I want to make rented cars available for returning
  So I can rent them to other clients
  
   Scenario: Find and rent a car
   Given 25 cars are available for rental 
   When cumstomer returns 3 cars
   Then there will be 28 cars available for rental
   
   Scenario: Return cars to make them available
   Given 2 cars are available in stock previously
   When one customer requests to rent 4 and another customer returns 5
   Then the customer can successfully rent cars and there will still be 3 car available
   
   Scenario: Return correct number of cars
   Given the revenue of charging one customer was 70 previously
   When the customer returns 5 cars
   Then there are 2 more cars should be returned
   
   Scenario: Total number of cars should be returned
   Given one customer rented 3 cars at first time
   When the customer rented 4 cars at second time
   Then the customer should return 7 cars in total