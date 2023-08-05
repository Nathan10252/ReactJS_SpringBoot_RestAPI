package com.fullstack.serverspringboot.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.fullstack.serverspringboot.dto.CountryDto;
import com.fullstack.serverspringboot.dto.SearchObject;
import com.fullstack.serverspringboot.repository.CountryRepository;
import com.fullstack.serverspringboot.service.CountryService;

@Service
public class CountryServiceImpl implements CountryService {
	@Autowired
	private CountryRepository mainRepo;

	@Override
	public CountryDto getCountryById(UUID countryId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<CountryDto> pagingCountry(SearchObject searchObj) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CountryDto> getAllCountry() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CountryDto createCountry(CountryDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CountryDto updateCountry(CountryDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteCountry(UUID countryId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAllCountry() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteListCountry(List<UUID> countryIds) {
		// TODO Auto-generated method stub
		
	}

}
