package com.maxima.pocecommerce.model.dto;

import lombok.*;

@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor

public class ClienteDTO {
        @Getter
        @Setter
        private String codigo;

        @Getter
        @Setter
        private String nome;
}
