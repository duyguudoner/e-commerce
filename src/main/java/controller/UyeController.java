package controller;

import model.Uye;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repository.UyeRepository;

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


}
