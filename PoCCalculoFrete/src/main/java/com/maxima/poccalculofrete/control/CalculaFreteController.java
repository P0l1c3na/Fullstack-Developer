package com.maxima.poccalculofrete.control;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class CalculaFreteController {
    private final Random r;

    public CalculaFreteController(){
        r = new Random();
    }

    public double valorFreteCalculado(int totalItens){
        var frete = r.nextDouble() * 15;
        if(frete < 5 || frete > 15){
            valorFreteCalculado(totalItens);
        }
        return frete * totalItens;
    }
}
