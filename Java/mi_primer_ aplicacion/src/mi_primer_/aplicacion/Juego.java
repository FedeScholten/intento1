/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mi_primer_.aplicacion;

/**
 *
 * @author fedes
 */
public class Juego {

    public int getPuntos() {
        return puntos;
    }

    public void setPuntos(int puntos) {
        this.puntos = puntos;
    }

    public int getVidas() {
        return vidas;
    }

    public void setVidas(int vidas) {
        this.vidas = vidas;
    }
    private int puntos, vidas;
    public String personajes, enemigos, herramientas;
    Juego(int puntos, int vidas, String personajes, String enemigos, String herramientas){
        this.puntos=puntos; 
        this.vidas=vidas;
        this.enemigos=enemigos;
        this.personajes=personajes; 
        this.herramientas=herramientas; 
    }
    String mostrarSaludo(){
        return "Hola soy "+this.personajes + " y tengo " +this.vidas +" vidas";
    }
}
