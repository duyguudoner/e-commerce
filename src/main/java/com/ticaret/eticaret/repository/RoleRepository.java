package com.ticaret.eticaret.repository;

import com.ticaret.eticaret.model.ERole;
import com.ticaret.eticaret.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
