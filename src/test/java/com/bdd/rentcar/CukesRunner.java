package com.bdd.rentcar;

import cucumber.api.junit.*;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(
		format={"pretty", "html:target/cucumber"},
		features="src/test/resources"
		)
public class CukesRunner {
	public void testMethod(){
		System.out.println("test git push try 2");
	}

}
