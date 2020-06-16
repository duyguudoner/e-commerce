package com.ticaret.eticaret.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "kategori")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Kategori {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long kategorino;
    private String kategori_adi;
    private String kategori_aciklama;
    private Date kategori_tarih;
    private String kategori_durum;
    private String kategori_creator;
    private String kategori_ip;

    public Kategori() {

    }

    public Long getKategorino() {
        return kategorino;
    }

    public void setKategorino(Long kategorino) {
        this.kategorino = kategorino;
    }

    public String getKategori_adi() {
        return kategori_adi;
    }

    public void setKategori_adi(String kategori_adi) {
        this.kategori_adi = kategori_adi;
    }

    public String getKategori_aciklama() {
        return kategori_aciklama;
    }

    public void setKategori_aciklama(String kategori_aciklama) {
        this.kategori_aciklama = kategori_aciklama;
    }

    public Date getKategori_tarih() {
        return kategori_tarih;
    }

    public void setKategori_tarih(Date kategori_tarih) {
        this.kategori_tarih = kategori_tarih;
    }

    public String getKategori_durum() {
        return kategori_durum;
    }

    public void setKategori_durum(String kategori_durum) {
        this.kategori_durum = kategori_durum;
    }

    public String getKategori_creator() {
        return kategori_creator;
    }

    public void setKategori_creator(String kategori_creator) {
        this.kategori_creator = kategori_creator;
    }

    public String getKategori_ip() {
        return kategori_ip;
    }

    public void setKategori_ip(String kategori_ip) {
        this.kategori_ip = kategori_ip;
    }
}
