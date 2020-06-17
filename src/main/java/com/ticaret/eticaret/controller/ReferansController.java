package com.ticaret.eticaret.controller;

import com.ticaret.eticaret.model.Referans;
import com.ticaret.eticaret.repository.ReferansRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/referans")
public class ReferansController {
    @Autowired
    private ReferansRepository referansRepository;

    @GetMapping
    public List<Referans> list(){
        return referansRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Referans get(@PathVariable Long id){
        return referansRepository.getOne(id);
    }

    @GetMapping
    @RequestMapping("/by/ref_type/{ref_type}")
    public List<Referans> getByType(@PathVariable String ref_type) {
        return referansRepository.findByRefType(ref_type);
    }

    @PostMapping
    public Referans create(@RequestBody final Referans referans) {
        return referansRepository.saveAndFlush(referans);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void  delete(@PathVariable Long id) {
        referansRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Referans update(@PathVariable Long id, @RequestBody Referans referans) {
        Referans existingReferans = referansRepository.getOne(id);
        BeanUtils.copyProperties(referans, existingReferans, "referansno");
        return referansRepository.saveAndFlush(existingReferans);
    }
}
