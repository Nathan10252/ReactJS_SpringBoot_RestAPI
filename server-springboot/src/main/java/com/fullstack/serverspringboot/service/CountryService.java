package com.fullstack.serverspringboot.service;

import java.util.UUID;

import org.springframework.data.domain.Page;

import com.fullstack.serverspringboot.dto.CountryDto;
import com.fullstack.serverspringboot.dto.SearchObject;

public interface CountryService {
	public CountryDto getCountryById(UUID countryId);

	public Page<CountryDto> pagingCountry(SearchObject searchObj);

	public CountryDto getAllCountry();

	public CountryDto createCountry(CountryDto dto);

	public CountryDto updateCountry(CountryDto dto);

	public void deleteCountry(UUID countryId);

}
