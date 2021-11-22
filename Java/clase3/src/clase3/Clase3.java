package clase3;
import personal.Personal;
import personal.Departamento; 
import recursosHumanos.Finanzas;

public class Clase3 {
    public static void main(String[] args) {
        Personal personas = new Personal("Federico", "Scholten", 19);
        personas.setSueldo(35000);
        System.out.println("Nombre:"+ personas.nombre);
        System.out.println("Sueldo:"+ personas.getSueldo());
        Personal nuevo = new Personal("Nathaniel", "Lin", 19);
        nuevo.setSueldo(70000);
        System.out.println("Nombre:"+ nuevo.nombre);
        System.out.println("Sueldo:"+ nuevo.getSueldo());
        Departamento yo = new Departamento("Agustin", "Matayoshi", 20, "Chiquito");
        yo.setSueldo(35000);
        System.out.println(yo.mostrarDatos());
        Finanzas ema = new Finanzas("Emanuel", "Chen", 20,"Futbol", "asistente");
        System.out.println(ema.nombre + ", Tu Sueldo es: $" + ema.AbonarSueldo());
    }
    
}
