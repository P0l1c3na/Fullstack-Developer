package com.maxima.pocecommerce.control;

import com.maxima.pocecommerce.model.dto.ProdutoDTO;
import com.maxima.pocecommerce.model.entity.Produto;
import com.maxima.pocecommerce.repository.ProdutoRepository;
import com.maxima.pocecommerce.util.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoController {

    @Autowired
    ProdutoRepository produtoRepository;

    public List<ProdutoDTO> getAllProdutos() {
        return ObjectMapperUtils.mapAll(produtoRepository.findAll(), ProdutoDTO.class);
    }

    public boolean addProduto(ProdutoDTO produtoDTO) {
        try {
            produtoRepository.save(ObjectMapperUtils.map(produtoDTO, Produto.class));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean updateProduto(String codigo, ProdutoDTO produtoDTO) {
        try {
            if (produtoRepository.findById(codigo).isPresent()) {
                produtoRepository.save(ObjectMapperUtils.map(produtoDTO, Produto.class));
                return true;
            }
            return false;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deleteProduto(String codigo) {
        try {
            var produto = produtoRepository.findById(codigo);
            if (produto.isPresent()) {
                produtoRepository.delete(produto.get());
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }
}
