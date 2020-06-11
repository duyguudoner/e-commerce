package com.ticaret.eticaret.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="referans")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Referans {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long referansno;
    private String ref_type;
    private String ref_title;
    private String ref_ustTitle;
    private String ref_durum;

    public Referans(){

    }
    public Long getReferansno() {
        return referansno;
    }

    public void setReferansno(Long referansno) {
        this.referansno = referansno;
    }

    public String getRef_type() {
        return ref_type;
    }

    public void setRef_type(String ref_type) {
        this.ref_type = ref_type;
    }

    public String getRef_title() {
        return ref_title;
    }

    public void setRef_title(String ref_title) {
        this.ref_title = ref_title;
    }

    public String getRef_ustTitle() {
        return ref_ustTitle;
    }

    public void setRef_ustTitle(String ref_ustTitle) {
        this.ref_ustTitle = ref_ustTitle;
    }

    public String getRef_durum() {
        return ref_durum;
    }

    public void setRef_durum(String ref_durum) {
        this.ref_durum = ref_durum;
    }
}
