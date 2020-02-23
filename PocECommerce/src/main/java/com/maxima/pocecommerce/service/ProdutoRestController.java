package com.maxima.pocecommerce.service;

import com.maxima.pocecommerce.control.ProdutoController;

import com.maxima.pocecommerce.model.dto.ProdutoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping(name = "produto", path = "/produto")
public class ProdutoRestController {

    @Autowired
    ProdutoController produtoController;

    @GetMapping
    public List<ProdutoDTO> getProdutos(){
        return produtoController.getAllProdutos();
    }

    @PostMapping
    public ResponseEntity<Object> addProduto(@RequestBody ProdutoDTO produtoDTO){
        if(produtoController.addProduto(produtoDTO)) {
            return new ResponseEntity<>(produtoDTO, HttpStatus.CREATED);
        } else return  new ResponseEntity<>("Não foi possível adicionar o produto...", HttpStatus.BAD_REQUEST);
    }

    @PutMapping
    public ResponseEntity<Object> updateProduto(@RequestParam String codigo, @RequestBody ProdutoDTO produtoDTO){
        if(produtoController.updateProduto(codigo, produtoDTO)) {
            return new ResponseEntity<>(produtoDTO, HttpStatus.ACCEPTED);
        } else  return  new ResponseEntity<>("Não foi possível atualizar o produto", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping
    public ResponseEntity<Object> deleteProduto(@RequestParam String codigo){
        if(produtoController.deleteProduto(codigo)) {
            return new ResponseEntity<>("Deletado com sucesso!", HttpStatus.OK);
        } else  return new ResponseEntity<>("Não foi possível deletar o produto...", HttpStatus.BAD_REQUEST);
    }
}
