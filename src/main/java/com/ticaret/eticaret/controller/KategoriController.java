package com.ticaret.eticaret.controller;

import com.ticaret.eticaret.model.Kategori;
import com.ticaret.eticaret.repository.KategoriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/kategori")
public class KategoriController {
    @Autowired
    private KategoriRepository kategoriRepository;

    @GetMapping
    public List<Kategori> list() { return kategoriRepository.findAll(); }

    @GetMapping
    @RequestMapping("{kategorino}")
    public Kategori get(@PathVariable Long kategorino) { return kategoriRepository.getOne(kategorino); }

    @PostMapping
    public Kategori create(@RequestBody final Kategori kategori) { return kategoriRepository.saveAndFlush(kategori); }

    @RequestMapping(value="{kategorino}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long kategorino) { kategoriRepository.deleteById(kategorino); }

    @RequestMapping(value = "{kategorino}", method = RequestMethod.PUT)
    public Kategori update(@PathVariable Long kategorino, @RequestBody Kategori kategori) {
        return kategoriRepository.saveAndFlush(kategori);
    }
}
