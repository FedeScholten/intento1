package recursosHumanos;
import personal.Departamento;
public class Finanzas extends Departamento{
   public String cargo;
    public Finanzas(String nombre, String apellido, int edad, String depto, String cargo) {
        super(nombre, apellido, edad, depto);
        this.cargo= cargo;
    }
    public float AbonarSueldo(){
        switch (cargo) {
            case "gerente":
                return 350000;
            case "asistente":
                return 80000;
            default:
                return 0;
        }
    } 
}
