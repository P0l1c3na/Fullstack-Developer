package com.maxima.pocecommerce.service;

import com.maxima.pocecommerce.control.ClienteController;
import com.maxima.pocecommerce.model.dto.ClienteDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(name = "cliente", path = "/cliente")
public class ClienteRestController {

    @Autowired
    public ClienteController clienteDataBaseController;

    @GetMapping
    public List<ClienteDTO> getAll(){
        return clienteDataBaseController.getAllClientes();
    }

    @PostMapping
    public ResponseEntity<Object> addCliente(@RequestBody ClienteDTO clienteDTO){

        if(clienteDataBaseController.addCliente(clienteDTO)) {
            return new ResponseEntity<>(clienteDTO, HttpStatus.OK);
        }
        else return new ResponseEntity<>("Não foi possível adicionar este cliente..." , HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Object> updateCliente(@RequestParam String codigo, @RequestBody ClienteDTO clienteDTO){
        if(clienteDataBaseController.updateCliente(codigo, clienteDTO)) {
            return new ResponseEntity<>(clienteDTO, HttpStatus.OK);
        }
        else  return new ResponseEntity<>("Não foi possivel atualizar o cliente!" , HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping
    public ResponseEntity<Object> deleteCliente(@RequestParam String codigo){
        if(clienteDataBaseController.deleteCliente(codigo)) {
            return new ResponseEntity<>("Deletado com sucesso!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Não há cliente com o código " + codigo +" cadastrado!", HttpStatus.OK);
        }
    }

}
