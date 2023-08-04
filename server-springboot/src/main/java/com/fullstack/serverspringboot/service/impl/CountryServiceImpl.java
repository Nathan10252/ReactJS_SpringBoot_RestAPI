package com.fullstack.serverspringboot.service.impl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fullstack.serverspringboot.dto.CountryDto;
import com.fullstack.serverspringboot.repository.CountryRepository;
import com.fullstack.serverspringboot.service.CountryService;

@Service
public class CountryServiceImpl implements CountryService {
	@Autowired
	private CountryRepository mainRepo;

	@Override
	public ResponseEntity<CountryDto> saveCountry(CountryDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<CountryDto> updateCountry(CountryDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteCountryById(UUID countryId) {
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<CountryDto> getCountryById(UUID countryId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Page<CountryDto>> getAllCountry() {
		// TODO Auto-generated method stub
		return null;
	}

}
