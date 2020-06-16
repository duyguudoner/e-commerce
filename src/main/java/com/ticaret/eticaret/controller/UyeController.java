package com.ticaret.eticaret.controller;

import com.ticaret.eticaret.model.Uye;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ticaret.eticaret.repository.UyeRepository;

import java.util.List;

@RestController
@RequestMapping("/uye")
public class UyeController {
    @Autowired
    private UyeRepository uyeRepository;

    @GetMapping
    public List <Uye> list(){
        return uyeRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Uye get(@PathVariable Long id){
        return uyeRepository.getOne(id);
    }

    @PostMapping
    public Uye create(@RequestBody final Uye uye){
        return uyeRepository.saveAndFlush(uye);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
         uyeRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    public Uye update(@PathVariable Long id, @RequestBody Uye uye) {
        Uye existingUye = uyeRepository.getOne(id);
        BeanUtils.copyProperties(uye,existingUye,"uyeno");
        return uyeRepository.saveAndFlush(uye);
    }

}
