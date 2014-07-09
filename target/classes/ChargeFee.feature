Feature: Rental cars should bring revenue for the company

  As an owner of a car rental company
  I want charge fee for rented cars
  So I can earn money

  Scenario: charge for renting 2 cars
    Given the beginning revenue is 0 and there are enough available cars
    When I rent 2 cars to my customer
    Then the revenue should became 20    
  
  Scenario: charge for renting available cars if requested cars out number the available ones
    Given the company have 5 cars available
    When 10 cars were rented to customer
    Then the revenue should be counted for the available cars, which are 50   
    
  Scenario: get total assets of the company
    Given the company have 10 cars and the begins at zero revenue
    When 5 cars were rented
    Then the total assets of the company should became 120050   
    
 