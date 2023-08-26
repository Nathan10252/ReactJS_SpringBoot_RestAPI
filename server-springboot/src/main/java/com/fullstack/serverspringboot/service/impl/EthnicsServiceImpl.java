package com.fullstack.serverspringboot.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.fullstack.serverspringboot.dto.EthnicsDto;
import com.fullstack.serverspringboot.dto.SearchObject;
import com.fullstack.serverspringboot.entity.Ethnics;
import com.fullstack.serverspringboot.repository.EthnicsRepository;
import com.fullstack.serverspringboot.service.EthnicsService;

@Service
public class EthnicsServiceImpl implements EthnicsService {
	@Autowired
	private EthnicsRepository mainRepo;

	@Autowired
	private EntityManager manager;

	@Override
	public EthnicsDto getEthnicsById(UUID ethnicsId) {
		if (ethnicsId == null)
			return null;
		Ethnics entity = mainRepo.findOneById(ethnicsId);
		if (entity == null)
			return null;
		return new EthnicsDto(entity);
	}

	@Override
	public Page<EthnicsDto> pagingEthnics(SearchObject searchObj) {
		if (searchObj == null)
			return null;
		int pageSize = searchObj.getPageSize();
		int pageIndex = searchObj.getPageIndex();
		pageIndex--;
		if (pageIndex < 0)
			pageIndex = 0;

		String q = "select e from Ethnics e ";
		String qCount = "select count(e.id) from Ethnics e ";

		String whereClause = "";
		String keyword = "";

		if (searchObj.getKeyword() != null) {
			keyword = searchObj.getKeyword().trim();
			whereClause += "where e.code like :keyword or e.name like :keyword or e.description like :keyword";
		}

		q += whereClause;
		qCount += whereClause;

		Query sql = manager.createQuery(q);
		Query sqlCount = manager.createQuery(qCount);
		
		if (searchObj.getKeyword() != null) {
			sql.setParameter("keyword", '%' + searchObj.getKeyword() + '%');
			sqlCount.setParameter("keyword", '%' + searchObj.getKeyword() + '%');
		}

		Pageable pageable = PageRequest.of(pageIndex, pageSize);

		long totalRecords = (long) sqlCount.getSingleResult();

		List<EthnicsDto> data = new ArrayList<EthnicsDto>();
		List<Ethnics> entities = sql.getResultList();
		for (Ethnics entity : entities) {
			data.add(new EthnicsDto(entity));
		}

		return new PageImpl<>(data, pageable, totalRecords);
	}

	@Override
	public List<EthnicsDto> getAllEthnics() {
		List<Ethnics> entities = mainRepo.findAll();
		List<EthnicsDto> data = new ArrayList<EthnicsDto>();
		for (Ethnics entity : entities) {
			data.add(new EthnicsDto(entity));
		}
		return data;
	}

	@Override
	public EthnicsDto createEthnics(EthnicsDto dto) {
		if (dto == null)
			return null;
		Ethnics entity = new Ethnics();
		entity.setCode(dto.getCode());
		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		Ethnics response = mainRepo.save(entity);
		return new EthnicsDto(response);
	}

	@Override
	public EthnicsDto updateEthnics(EthnicsDto dto) {
		if (dto == null)
			return null;
		if (dto.getId() == null)
			return null;
		Ethnics entity = mainRepo.findOneById(dto.getId());
		entity.setCode(dto.getCode());
		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		Ethnics response = mainRepo.save(entity);
		return new EthnicsDto(response);
	}

	@Override
	public void deleteEthnics(UUID ethnicsId) {
		if (ethnicsId == null)
			return;
		Ethnics entity = mainRepo.findOneById(ethnicsId);
		if (entity == null)
			return;
		mainRepo.delete(entity);
	}

	@Override
	public void deleteAllEthnics() {
		mainRepo.deleteAll();
	}

	@Override
	public void deleteListEthnics(List<UUID> ethnicsIds) {
		if (ethnicsIds == null)
			return;
		for (UUID id : ethnicsIds) {
			if (id == null)
				continue;
			Ethnics entity = mainRepo.findOneById(id);
			if (entity == null)
				continue;
			mainRepo.delete(entity);
		}
	}

}
