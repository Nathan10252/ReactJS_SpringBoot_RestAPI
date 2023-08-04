package com.fullstack.serverspringboot.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstack.serverspringboot.entity.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, UUID>{

}
