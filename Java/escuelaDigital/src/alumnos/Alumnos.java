package alumnos;

public class Alumnos {
    public String nombre, apellido; 
    public int notas,edad,id;
   
    public Alumnos(int id, String nombre, String apellido, int notas, int edad){
        this.id= id; 
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad; 
        this.notas= notas; 
    }
}
