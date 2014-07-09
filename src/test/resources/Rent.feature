Feature: Rental cars should be possible to rent 

  As an owner of a car rental company
  I want to make cars available for renting
  So I can rent them to clients

  Scenario: Find and rent a car
    Given there are 18 cars available for rental
    When I rent one to my customer
    Then there will only be 17 cars available for rental
    
  Scenario: Deny rent request when no available car
    Given all 6 cars has been rented to customers
    When another customer request to rent a car  
    Then the request should be denied and there will still be 0 cars available
    
    