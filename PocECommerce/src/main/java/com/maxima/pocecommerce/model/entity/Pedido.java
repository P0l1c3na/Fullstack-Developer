package com.maxima.pocecommerce.model.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Pedido {

    @Id
    @Getter
    @Setter
    private int numero;

    @ManyToOne
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
