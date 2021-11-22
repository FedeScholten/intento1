package personal;

public class Departamento extends Personal{
    public Departamento(String nombre, String apellido, int edad, String depto){
        super(nombre, apellido, edad);
    }
    public String mostrarDatos(){
        return "\n Nombre: "+ nombre + "\n Apellido: "+ apellido + "\n Edad: "+ edad + "\n Sueldo: " + getSueldo();
    }
}
