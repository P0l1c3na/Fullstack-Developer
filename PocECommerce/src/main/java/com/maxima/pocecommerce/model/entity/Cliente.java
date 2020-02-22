package com.maxima.pocecommerce.model.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {
    @Id
    @Getter
    @Setter
    private String codigo;

    @Getter
    @Setter
    private String nome;
}
