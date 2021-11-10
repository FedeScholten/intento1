package escueladigital;

import docente.Docente;
import alumnos.Alumnos;

public class EscuelaDigital {
    
    public static void main(String[] args) {
        Docente docente1 = new Docente(92, "Sebastian","Sabaleta",45);
        Alumnos alumno1 = new Alumnos(94,"Federico","Scholten",20,10);
        Campus campus = new Campus(94, "Web");
        campus.setPassword("12345");
        Campus docente = new Campus(12,"Web");
        docente.setPassword("3534");
        System.out.println(docente.ingresar(12,"3534"));
        
    }
    
}
