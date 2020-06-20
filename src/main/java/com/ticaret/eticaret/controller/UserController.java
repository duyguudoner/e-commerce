package com.ticaret.eticaret.controller;

import com.ticaret.eticaret.model.User;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ticaret.eticaret.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List <User> list(){
        return userRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public User get(@PathVariable Long id){
        return userRepository.getOne(id);
    }

    @PostMapping
    public User create(@RequestBody final User user){
        return userRepository.saveAndFlush(user);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
         userRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    public User update(@PathVariable Long id, @RequestBody User user) {
        User existingUser = userRepository.getOne(id);
        BeanUtils.copyProperties(user, existingUser,"uyeno");
        return userRepository.saveAndFlush(user);
    }

    //Bundan sonra, User Detailsi her istediğimizde SecurityContext kullanmak yeterli olacak.
    //UserDetails userDetails =
      //      (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

    // userDetails.getUsername()
    // userDetails.getPassword()
    // userDetails.getAuthorities()

}
