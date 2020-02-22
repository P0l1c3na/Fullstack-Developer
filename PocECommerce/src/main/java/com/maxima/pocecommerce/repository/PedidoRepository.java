package com.maxima.pocecommerce.repository;

import com.maxima.pocecommerce.model.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
}
