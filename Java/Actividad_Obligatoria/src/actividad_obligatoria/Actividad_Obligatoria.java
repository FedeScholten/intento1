package actividad_obligatoria;

import java.util.Scanner;

public class Actividad_Obligatoria {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingresá tu nombre:");
        String nombre = entrada.nextLine();
        System.out.println("Ingresá tu apellido:");
        String apellido = entrada.nextLine();
        System.out.println("Ingresá tu edad:");
        int edad = entrada.nextInt();
        System.out.println("¿Cuál es tu hobbie?");
        String hobbie = entrada.next();
        System.out.println("¿Editor de código favorito?");
        String editor = entrada.next();
        System.out.println("¿Qué sistema operativo usas?");
        String sistema = entrada.next();
        System.out.println("Tu nombre es: " +nombre);
        System.out.println("Tu apellido es: "+apellido);
        System.out.println("Tu edad es: "+edad);
        System.out.println("Tu hobbie es: "+hobbie);
        System.out.println("Tu editor de código favorito es: "+editor);
        System.out.println("El sistema operativo que usas es: "+sistema);
        
        
    }
    
}
