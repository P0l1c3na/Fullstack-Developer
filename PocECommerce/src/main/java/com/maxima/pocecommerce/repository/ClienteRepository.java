package com.maxima.pocecommerce.repository;

import com.maxima.pocecommerce.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface ClienteRepository extends JpaRepository<Cliente,String> {
}
