package com.maxima.pocecommerce.model.dto;

import com.maxima.pocecommerce.model.entity.Cliente;
import lombok.Data;

@Data
public class PedidoDTO {

    private int numero;

    private Cliente cliente;

    private double valorTotal;

    private int qtdItens;

    private double valorFrete;
}
