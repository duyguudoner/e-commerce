package com.ticaret.eticaret.repository;

import com.ticaret.eticaret.model.Referans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReferansRepository extends JpaRepository<Referans,Long> {

    @Query("select r from referans r where r.ref_type = ?1 and r.ref_durum = 'T'")
    List<Referans> findByRefType(String ref_type);
}
