Feature: User should be able to rent 

  As an user of a car rental company
  I want to rent cars
  So I can use the rented car

  Scenario: Find and rent a car
    Given there are 18 cars available for rental
    When I rent one
    Then there will only be 17 cars available for rental