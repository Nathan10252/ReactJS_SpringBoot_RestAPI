package com.fullstack.serverspringboot.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fullstack.serverspringboot.entity.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, UUID>{
	@Query("select c from Country c where c.id = :countryId")
	public Country findOneById(@Param("countryId") UUID id);
	
	@Query("select c from Country c")
	public List<Country> findAll();
}
