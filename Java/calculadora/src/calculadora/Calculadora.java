package calculadora;

import operaciones.Operaciones;
import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Pone un número");
        int numero1 = entrada.nextInt();
        System.out.println("Pone otro número");
        int numero2 = entrada.nextInt();
        System.out.println("Que operacion queres hacer \n pulsa \n \"+\"\n \"-\" \n \"*\" \n \"/\" ");
        String op = entrada.next();
        Operaciones operacion = new Operaciones(numero1,numero2, op);
        System.out.println("El resultado es: "+operacion.Operaciones());
    }
    
}
