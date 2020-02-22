package com.maxima.pocecommerce.control.restcontroller;

import com.maxima.pocecommerce.control.databasecontroller.ClienteDataBaseController;
import com.maxima.pocecommerce.model.dto.ClienteDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(name = "cliente", path = "/cliente")
public class ClienteRestController {

    @Autowired
    public ClienteDataBaseController clienteDataBaseController;

    @GetMapping
    public List<ClienteDTO> getAll(){
        return clienteDataBaseController.getAllClientes();
    }


}
