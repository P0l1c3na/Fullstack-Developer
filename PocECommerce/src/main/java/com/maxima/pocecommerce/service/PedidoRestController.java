package com.maxima.pocecommerce.service;

import com.maxima.pocecommerce.control.PedidoController;
import com.maxima.pocecommerce.model.dto.PedidoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(name = "pedido", path = "/pedido")
public class PedidoRestController {

    @Autowired
    PedidoController pedidoController;

    @GetMapping
    public List<PedidoDTO> getPedidos() {
        return pedidoController.getAllPedidos();
    }

    @PostMapping
    public ResponseEntity<Object> addPedido(@RequestBody PedidoDTO pedidoDTO) {
        if (pedidoController.addPedido(pedidoDTO)) {
            return new ResponseEntity<>(pedidoDTO, HttpStatus.CREATED);
        } else return new ResponseEntity<>("Não foi possível adicionar este pedido", HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Object> updatePedido(@RequestParam Integer numeroPedido, @RequestBody PedidoDTO pedidoDTO) {
        if (pedidoController.updatePedido(numeroPedido, pedidoDTO)) {
            return new ResponseEntity<>(pedidoDTO, HttpStatus.ACCEPTED);
        } else return new ResponseEntity<>("Não foi possivel atualizar o pedido...", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping
    public ResponseEntity<Object> deletePedido(@RequestParam Integer numeroPedido) {
        if (pedidoController.deletePedido(numeroPedido)) {
            return new ResponseEntity<>("Deletado com sucesso!", HttpStatus.OK);
        } else
            return new ResponseEntity<>("Não foi possível excluir o pedido de número " + numeroPedido, HttpStatus.BAD_REQUEST);
    }
}
