
package mi_primer_.aplicacion;

import accesorios.Auto;            

public class Mi_primer_Aplicacion {
    public static void main(String[] args) {
        boolean llueve = true;
        String nombre;
        float promedio;
        int numero; 
        numero = 13;
        float resultado; 
        resultado = numero + 26; 
        promedio = (numero*100)/resultado;
        System.out.println("Ema cagon");
        System.out.println(resultado);
        System.out.println("El promedio es: "+promedio);
        System.out.println(45>32 || 1>3);
        if(llueve == true){
            System.out.println("No hay fulbo");
        }else{
            System.out.println("Hay fulbo");
        }
        Juego jugador = new Juego(0,3,"Emin","Ankara","Super Saiyan");
        Juego jugador2 = new Juego(0,2,"Fede","Ankara","Super Saiyan 3");
        System.out.println("Mi nombre es "+ jugador.personajes);
        System.out.println("Tengo "+ jugador.getVidas() + " vidas");
        System.out.println(jugador.mostrarSaludo());
        System.out.println(jugador2.mostrarSaludo());
        Auto miAuto= new Auto(250, 4, 2017, "rojo", "bmw");
        miAuto.setEncendido(true);
        System.out.println(miAuto.encender_auto());
        
    }
    
}
