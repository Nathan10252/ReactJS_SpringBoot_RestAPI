package com.fullstack.serverspringboot.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.serverspringboot.dto.CountryDto;
import com.fullstack.serverspringboot.dto.EthnicsDto;
import com.fullstack.serverspringboot.dto.SearchObject;
import com.fullstack.serverspringboot.service.CountryService;
import com.fullstack.serverspringboot.service.EthnicsService;

@RestController
@RequestMapping("/api/ethnics")
public class EthnicsController {
	@Autowired
	private EthnicsService mainService;

	@GetMapping(value = "/get-by-id/{id}")
	public ResponseEntity<EthnicsDto> getEthnicsById(@PathVariable UUID id) {
		EthnicsDto res = mainService.getEthnicsById(id);
		if (res == null)
			return new ResponseEntity<EthnicsDto>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<EthnicsDto>(res, HttpStatus.OK);
	}

	@PostMapping(value = "/paging-ethnics")
	public ResponseEntity<Page<EthnicsDto>> pagingEthnics(@RequestBody SearchObject searchObj) {
		Page<EthnicsDto> res = mainService.pagingEthnics(searchObj);
		if (res == null)
			return new ResponseEntity<Page<EthnicsDto>>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<Page<EthnicsDto>>(res, HttpStatus.OK);
	}

	@GetMapping(value = "/get-all-ethnics")
	public ResponseEntity<List<EthnicsDto>> getAllEthnics() {
		List<EthnicsDto> res = mainService.getAllEthnics();
		return new ResponseEntity<List<EthnicsDto>>(res, HttpStatus.OK);
	}

	@PostMapping(value = "/create-ethnics")
	public ResponseEntity<EthnicsDto> createEthnics(@RequestBody EthnicsDto dto) {
		EthnicsDto res = mainService.createEthnics(dto);
		if (res == null)
			return new ResponseEntity<EthnicsDto>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<EthnicsDto>(res, HttpStatus.OK);
	}

	@PutMapping(value = "/update-ethnics")
	public ResponseEntity<EthnicsDto> updateEthnics(@RequestBody EthnicsDto dto) {
		EthnicsDto res = mainService.updateEthnics(dto);
		if (res == null)
			return new ResponseEntity<EthnicsDto>(res, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<EthnicsDto>(res, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete-ethnics/{id}")
	public void deleteEthnics(@PathVariable UUID id) {
		mainService.deleteEthnics(id);
	}

	@DeleteMapping(value = "/delete-all-ethnics")
	public void deleteAllEthnics() {
		mainService.deleteAllEthnics();
	}

	@DeleteMapping(value = "/delete-list-ethnics")
	public void deleteListEthnics(@RequestBody List<UUID> ethnicsIds) {
		mainService.deleteListEthnics(ethnicsIds);
	}
}
