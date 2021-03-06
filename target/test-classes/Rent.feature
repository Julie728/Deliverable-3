Feature: Rental cars should be possible to rent 

  As an owner of a car rental company
  I want to make cars available for renting
  So I can rent them to clients

  Scenario: Find and rent a car
    Given there are 18 cars available for rental
    When I rent 1 to my customer
    Then there will only be 17 cars available for rental
    
  Scenario: Deny rent request when no available car
    Given all 6 cars has been rented to customers
    When another customer request to rent 1 car  
    Then the request should be denied and there will still be 0 cars available
    
  Scenario: Deny request when not enough cars for rental
    Given only 5 cars can be rented
    When the customer requests to rent 7
    Then sorry, there should be 2 more cars for rental