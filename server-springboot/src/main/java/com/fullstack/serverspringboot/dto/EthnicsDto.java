package com.fullstack.serverspringboot.dto;

import java.util.UUID;

import com.fullstack.serverspringboot.entity.Ethnics;

public class EthnicsDto {
	private UUID id;
	private String code;
	private String name;
	private String description;

	public EthnicsDto() {

	}

	public EthnicsDto(Ethnics entity) {
		this.id = entity.getId();
		this.code = entity.getCode();
		this.name = entity.getName();
		this.description = entity.getDescription();
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
