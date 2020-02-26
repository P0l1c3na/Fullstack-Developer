package com.maxima.poccalculofrete.service;

import com.maxima.poccalculofrete.control.CalculaFreteController;
import com.maxima.poccalculofrete.model.CalculoFrete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequestMapping(name = "calculofrete", path = "/calculofrete")
public class FreteRestController {

    @Autowired
    CalculaFreteController calculaFreteController;

    public FreteRestController() {

    }

    @PostMapping
    public double calculaValorFrete(@RequestBody CalculoFrete calculoFrete) {
        if (calculoFrete.getTotalItens() > 0) {
            return calculaFreteController.valorFreteCalculado(calculoFrete.getTotalItens());
        } else return 0;
    }

}

