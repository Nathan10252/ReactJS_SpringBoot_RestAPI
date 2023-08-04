package com.fullstack.serverspringboot.service.impl;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import com.fullstack.serverspringboot.dto.CountryDto;

public interface CountryService {
	public ResponseEntity<CountryDto> saveCountry(CountryDto dto);

	public ResponseEntity<CountryDto> updateCountry(CountryDto dto);

	public void deleteCountryById(UUID countryId);

	public ResponseEntity<CountryDto> getCountryById(UUID countryId);

	public ResponseEntity<Page<CountryDto>> getAllCountry();
}
