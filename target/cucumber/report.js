$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Rent.feature");
formatter.feature({
  "id": "rental-cars-should-be-possible-to-rent-to-gain-revenue-to-the-rental-company.",
  "description": "\r\nAs an owner of a car rental company\r\nI want to make cars available for renting\r\nSo I can make money",
  "name": "Rental cars should be possible to rent to gain revenue to the rental company.",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "rental-cars-should-be-possible-to-rent-to-gain-revenue-to-the-rental-company.;find-and-rent-a-car",
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
  "name": "I rent one",
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
  "duration": 217831143,
  "status": "passed"
});
formatter.match({
  "location": "RentStepdefs.rent_one_car()"
});
formatter.result({
  "duration": 162160,
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
  "duration": 3883618,
  "status": "passed"
});
});