package com.fullstack.serverspringboot.service;

import java.util.List;
import java.util.UUID;

import org.springframework.data.domain.Page;

import com.fullstack.serverspringboot.dto.EthnicsDto;
import com.fullstack.serverspringboot.dto.SearchObject;

public interface EthnicsService {
	public EthnicsDto getEthnicsById(UUID ethnicsId);

	public Page<EthnicsDto> pagingEthnics(SearchObject searchObj);

	public List<EthnicsDto> getAllEthnics();

	public EthnicsDto createEthnics(EthnicsDto dto);

	public EthnicsDto updateEthnics(EthnicsDto dto);

	public void deleteEthnics(UUID ethnicsId);

	public void deleteAllEthnics();

	public void deleteListEthnics(List<UUID> ethnicsIds);

}
