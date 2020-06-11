package model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity(name="uye")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Uye {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uyeno;
    private String uye_adi;
    private String uye_soyadi;
    private String uye_mail;
    private String uye_telefon;
    private String uye_username;
    private String uye_sifre;
    private Date  uye_iztar;
    private Date  uye_tarih;
    private String uye_durum;
    private String uye_ip;
    private String isadmin;
    private String issuperadmin;

    public Uye(){
    }

    public Long getUyeno() {
        return uyeno;
    }

    public void setUyeno(Long uyeno) {
        this.uyeno = uyeno;
    }

    public String getUye_adi() {
        return uye_adi;
    }

    public void setUye_adi(String uye_adi) {
        this.uye_adi = uye_adi;
    }

    public String getUye_soyadi() {
        return uye_soyadi;
    }

    public void setUye_soyadi(String uye_soyadi) {
        this.uye_soyadi = uye_soyadi;
    }

    public String getUye_mail() {
        return uye_mail;
    }

    public void setUye_mail(String uye_mail) {
        this.uye_mail = uye_mail;
    }

    public String getUye_telefon() {
        return uye_telefon;
    }

    public void setUye_telefon(String uye_telefon) {
        this.uye_telefon = uye_telefon;
    }

    public String getUye_username() {
        return uye_username;
    }

    public void setUye_username(String uye_username) {
        this.uye_username = uye_username;
    }

    public String getUye_sifre() {
        return uye_sifre;
    }

    public void setUye_sifre(String uye_sifre) {
        this.uye_sifre = uye_sifre;
    }

    public Date getUye_iztar() {
        return uye_iztar;
    }

    public void setUye_iztar(Date uye_iztar) {
        this.uye_iztar = uye_iztar;
    }

    public Date getUye_tarih() {
        return uye_tarih;
    }

    public void setUye_tarih(Date uye_tarih) {
        this.uye_tarih = uye_tarih;
    }

    public String getUye_durum() {
        return uye_durum;
    }

    public void setUye_durum(String uye_durum) {
        this.uye_durum = uye_durum;
    }

    public String getUye_ip() {
        return uye_ip;
    }

    public void setUye_ip(String uye_ip) {
        this.uye_ip = uye_ip;
    }

    public String getIsadmin() {
        return isadmin;
    }

    public void setIsadmin(String isadmin) {
        this.isadmin = isadmin;
    }

    public String getIssuperadmin() {
        return issuperadmin;
    }

    public void setIssuperadmin(String issuperadmin) {
        this.issuperadmin = issuperadmin;
    }
}
