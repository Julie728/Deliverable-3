Feature: Rental cars should be possible to rent to gain revenue to the rental company.

  As an owner of a car rental company
  I want to make cars available for renting
  So I can use it 

  Scenario: Find and rent a car
    Given there are more than 1 car available for rental
    When I request to rent car
    Then there will only be 17 cars available for rental