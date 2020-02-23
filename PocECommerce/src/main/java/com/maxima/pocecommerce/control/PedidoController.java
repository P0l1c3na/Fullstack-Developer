package com.maxima.pocecommerce.control;

import com.maxima.pocecommerce.model.dto.PedidoDTO;
import com.maxima.pocecommerce.model.entity.Pedido;
import com.maxima.pocecommerce.repository.PedidoRepository;
import com.maxima.pocecommerce.util.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<PedidoDTO> getAllPedidos() {
        return ObjectMapperUtils.mapAll(pedidoRepository.findAll(), PedidoDTO.class);
    }

    public boolean addPedido(PedidoDTO pedidoDTO) {
        try {
            pedidoRepository.save(ObjectMapperUtils.map(pedidoDTO, Pedido.class));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean updatePedido(Integer numeroPedido, PedidoDTO pedidoDTO) {
        try {
            if (pedidoRepository.findById(numeroPedido).isPresent()) {
                pedidoRepository.save(ObjectMapperUtils.map(pedidoDTO, Pedido.class));
                return true;
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deletePedido(Integer numeroPedido) {
        try {
            var pedido = pedidoRepository.findById(numeroPedido);
            if (pedido.isPresent()) {
                pedidoRepository.delete(pedido.get());
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }
}
