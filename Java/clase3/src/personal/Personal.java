package personal;

public class Personal {
    public String nombre, apellido;
    public int edad; 
    private float sueldo;
    public float getSueldo() {
            return this.sueldo;
        }
    public void setSueldo(float sueldo) {
        this.sueldo = sueldo;
    }  
    public Personal(String nombre, String apellido, int edad){
        this.nombre= nombre; 
        this.apellido= apellido; 
        this.edad= edad; 
    }
    
    
}
