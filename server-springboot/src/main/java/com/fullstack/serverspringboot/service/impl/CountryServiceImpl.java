package com.fullstack.serverspringboot.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.fullstack.serverspringboot.dto.CountryDto;
import com.fullstack.serverspringboot.dto.SearchObject;
import com.fullstack.serverspringboot.entity.Country;
import com.fullstack.serverspringboot.repository.CountryRepository;
import com.fullstack.serverspringboot.service.CountryService;

@Service
public class CountryServiceImpl implements CountryService {
	@Autowired
	private CountryRepository mainRepo;

	@Autowired
	private EntityManager manager;

	@Override
	public CountryDto getCountryById(UUID countryId) {
		Country entity = mainRepo.findOneById(countryId);
		if (entity == null)
			return null;
		return new CountryDto(entity);
	}

	@Override
	public Page<CountryDto> pagingCountry(SearchObject searchObj) {
		if (searchObj == null)
			return null;
		int pageSize = searchObj.getPageSize();
		int pageIndex = searchObj.getPageIndex();
		pageIndex--;
		if (pageIndex < 0)
			pageIndex = 0;

		String queryCount = "select count(c.id) from Country c ";
		String query = "select c from Country c ";

		String keyword = null;
		if (searchObj.getKeyword() != null) {
			keyword = searchObj.getKeyword().trim();
		}

		String whereClause = "";
		if (StringUtils.hasText(keyword)) {
			whereClause += "where c.name like :keyword or c.code like :keyword";
		}

		query += whereClause;
		queryCount += whereClause;

		Query sql = manager.createQuery(query);
		Query sqlCount = manager.createQuery(queryCount);

		if (keyword != null) {
			sql.setParameter("keyword", '%' + keyword + '%');
			sql.setParameter("keyword", '%' + keyword + '%');
		}

		int startPosition = pageIndex * pageSize;
		sql.setFirstResult(startPosition);
		sql.setMaxResults(pageSize);

		List<Country> entities = sql.getResultList();
		long numberResult = (long) sqlCount.getSingleResult();

		Pageable pageable = PageRequest.of(pageIndex, pageSize);

		List<CountryDto> data = new ArrayList<CountryDto>();
		for (Country entity : entities) {
			data.add(new CountryDto(entity));
		}
		return new PageImpl<CountryDto>(data, pageable, numberResult);
	}

	@Override
	public List<CountryDto> getAllCountry() {
		List<Country> entities = mainRepo.findAll();
		List<CountryDto> data = new ArrayList<CountryDto>();
		for (Country entity : entities) {
			data.add(new CountryDto(entity));
		}
		// System.out.println("create data");
		return data;
	}

	@Override
	public CountryDto createCountry(CountryDto dto) {
		if (dto == null)
			return null;
		Country entity = new Country();
		entity.setCode(dto.getCode());
		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		Country response = mainRepo.save(entity);
		return new CountryDto(response);
	}

	@Override
	public CountryDto updateCountry(CountryDto dto) {
		System.out.println(dto.getId());
		if (dto == null || dto.getId() == null)
			return null;
		// System.out.println("cathced");
		Country entity = mainRepo.findOneById(dto.getId());
		// System.out.println("cathced 2" + entity.getCode() + entity.getName());
		if (entity == null)
			return null;
		entity.setCode(dto.getCode());
		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		// System.out.println("cathced 3");
		Country response = mainRepo.save(entity);
		return new CountryDto(response);
	}

	@Override
	@Transactional
	public void deleteCountry(UUID countryId) {
		if (countryId == null)
		return;
		Country entity = mainRepo.findOneById(countryId);
		System.out.println(countryId);
		// System.out.println(entity);
		if (entity == null)
			return;
		mainRepo.deleteById(entity.getId());
	}

	@Override
	public void deleteAllCountry() {
		mainRepo.deleteAll();
	}

	@Override
	public void deleteListCountry(List<UUID> countryIds) {
		if (countryIds == null)
			return;
		for (UUID id : countryIds) {
			deleteCountry(id);
		}
	}

}
