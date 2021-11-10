package ingreso;

import java.util.Scanner;

public class Ingreso {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Pone tu nombre");
        String nombre = entrada.nextLine();
//        System.out.println("Pone tu apellido");
//        String apellido = entrada.nextLine();
//        System.out.println("Ingrese su edad");
//        int edad = entrada.nextInt();
//        System.out.println("Tu Nombre: "+nombre);
//        System.out.println("Tu Apellido: "+apellido);
//        System.out.println("Tu Edad: " +edad);
        System.out.println("Pone tu contraseña");
        String pass = entrada.nextLine();
        Datos ingresar = new Datos();
        ingresar.setUsuario(nombre);
        ingresar.setContraseña(pass);
        if(ingresar.validar()== true){
            System.out.println("Que onda pa bienvenido");
        }else{
            System.out.println("No te puede costar tanto pa");
        }
    }
    
}
