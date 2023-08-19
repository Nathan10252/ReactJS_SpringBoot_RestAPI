package com.fullstack.serverspringboot.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.serverspringboot.dto.CountryDto;
import com.fullstack.serverspringboot.dto.SearchObject;
import com.fullstack.serverspringboot.service.CountryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/country")
public class CountryController {
	@Autowired
	private CountryService mainService;

	@GetMapping(value = "/get-by-id/{id}")
	public ResponseEntity<CountryDto> getCountryById(@PathVariable UUID id) {
		CountryDto res = mainService.getCountryById(id);
		if (res == null)
			return new ResponseEntity<CountryDto>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<CountryDto>(res, HttpStatus.OK);
	}

	@PostMapping(value = "/paging-country")
	public ResponseEntity<Page<CountryDto>> pagingCountry(@RequestBody SearchObject searchObj) {
		Page<CountryDto> res = mainService.pagingCountry(searchObj);
		if (res == null)
			return new ResponseEntity<Page<CountryDto>>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<Page<CountryDto>>(res, HttpStatus.OK);
	}

	@GetMapping(value = "/get-all-country")
	public ResponseEntity<List<CountryDto>> getAllCountry() {
		List<CountryDto> res = mainService.getAllCountry();
		return new ResponseEntity<List<CountryDto>>(res, HttpStatus.OK);
	}

	@PostMapping(value = "/create-country")
	public ResponseEntity<CountryDto> createCountry(@RequestBody CountryDto dto) {
		CountryDto res = mainService.createCountry(dto);
		if (res == null)
			return new ResponseEntity<CountryDto>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<CountryDto>(res, HttpStatus.OK);
	}

	@PutMapping(value = "/update-country")
	public ResponseEntity<CountryDto> updateCountry(@RequestBody CountryDto dto) {
		CountryDto res = mainService.updateCountry(dto);
		if (res == null)
			return new ResponseEntity<CountryDto>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<CountryDto>(res, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete-country/{id}")
	public void deleteCountry(@PathVariable UUID id) {
		mainService.deleteCountry(id);
	}

	@DeleteMapping(value = "/delete-all-country")
	public void deleteAllCountry() {
		mainService.deleteAllCountry();
	}

	@DeleteMapping(value = "/delete-list-country")
	public void deleteListCountry(@RequestBody List<UUID> countryIds) {
		mainService.deleteListCountry(countryIds);
	}
}
