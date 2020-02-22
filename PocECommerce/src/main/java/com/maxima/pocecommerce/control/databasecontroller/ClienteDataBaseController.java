package com.maxima.pocecommerce.control.databasecontroller;


import com.maxima.pocecommerce.model.dto.ClienteDTO;
import com.maxima.pocecommerce.repository.ClienteRepository;
import com.maxima.pocecommerce.utils.ObjectMapperUtils;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteDataBaseController {

    public ModelMapper modelMapper;

    public ClienteDataBaseController(){
        modelMapper = new ModelMapper();
    }
    @Autowired
    private ClienteRepository clienteRepository;


    public List<ClienteDTO> getAllClientes(){
        var listaDeClientes =  clienteRepository.findAll();

        return ObjectMapperUtils.mapAll(listaDeClientes, ClienteDTO.class);
    }
}
