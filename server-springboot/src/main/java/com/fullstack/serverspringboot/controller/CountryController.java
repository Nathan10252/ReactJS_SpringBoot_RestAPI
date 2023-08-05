package com.fullstack.serverspringboot.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.serverspringboot.dto.CountryDto;
import com.fullstack.serverspringboot.service.CountryService;

@RestController
@RequestMapping("/api/country")
public class CountryController {
	@Autowired
	private CountryService mainService;

	@GetMapping(value = "/get-by-id/{id}")
	public ResponseEntity<CountryDto> getCountryById(@PathVariable UUID id) {
		CountryDto res = mainService.getCountryById(id);
		return new ResponseEntity<CountryDto>(res, HttpStatus.OK);
	}
}
