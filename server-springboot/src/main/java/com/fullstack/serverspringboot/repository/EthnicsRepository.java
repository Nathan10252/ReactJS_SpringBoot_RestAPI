package com.fullstack.serverspringboot.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fullstack.serverspringboot.entity.Ethnics;

@Repository
public interface EthnicsRepository extends JpaRepository<Ethnics, UUID>{
	@Query(value="select e from Ethnics e where e.id = :id")
	public Ethnics findOneById(@Param("id") UUID ethnicsId);
	
	@Query(value="select e from Ethnics e")
	public List<Ethnics> findAll();
}
