package com.maxima.pocecommerce.control;


import com.maxima.pocecommerce.model.dto.ClienteDTO;
import com.maxima.pocecommerce.model.entity.Cliente;
import com.maxima.pocecommerce.repository.ClienteRepository;
import com.maxima.pocecommerce.util.ObjectMapperUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<ClienteDTO> getAllClientes() {
        return ObjectMapperUtils.mapAll(clienteRepository.findAll(), ClienteDTO.class);
    }

    public boolean addCliente(ClienteDTO clienteDTO) {
        try {
            clienteRepository.save(ObjectMapperUtils.map(clienteDTO, Cliente.class));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean updateCliente(String codigo, ClienteDTO clienteDTO) {

        if (clienteRepository.findById(codigo).isPresent()) {
            clienteRepository.save(ObjectMapperUtils.map(clienteDTO, Cliente.class));
            return true;
        }
        return false;
    }

    public boolean deleteCliente(String codigo) {
        var client = clienteRepository.findById(codigo);
        if (client.isPresent()) {
            clienteRepository.delete(client.get());
            return true;
        } else {
            return false;
        }
    }

}
