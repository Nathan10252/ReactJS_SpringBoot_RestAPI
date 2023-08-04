package com.fullstack.serverspringboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
	@GetMapping(value="/test")
	public ResponseEntity<String> testApi() {
		String text = "Hello World";
		return new ResponseEntity<String>(text, HttpStatus.OK);
	}
	
//	@GetMapping(value="")
}
