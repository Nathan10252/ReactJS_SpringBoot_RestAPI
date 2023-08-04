package com.fullstack.serverspringboot.dto;

import java.util.UUID;

import com.fullstack.serverspringboot.entity.Country;

public class CountryDto {
	private UUID id;
	private String code;
	private String name;
	private String description;

	public CountryDto() {

	}

	public CountryDto(Country entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
		this.code = entity.getCode();
		this.description = entity.getDescription();
	}

	public CountryDto(UUID id, String code, String name, String description) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.description = description;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
