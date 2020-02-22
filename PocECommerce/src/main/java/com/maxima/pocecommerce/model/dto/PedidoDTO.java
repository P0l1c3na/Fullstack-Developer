package com.maxima.pocecommerce.model.dto;

import com.maxima.pocecommerce.model.entity.Cliente;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class PedidoDTO {

    @Getter
    @Setter
    private int numero;

    @Getter
    @Setter
    private Cliente cliente;

    @Getter
    @Setter
    private double valorTotal;

    @Getter
    @Setter
    private int qtdItens;

    @Getter
    @Setter
    private double valorFrete;
}
