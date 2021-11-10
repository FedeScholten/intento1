package accesorios;


public class Auto {
    public int velocidad,capacidad,año;
    private Boolean encendido;
    public String color,modelo; 

    public Boolean isEncendido() {
        return encendido;
    }

    public void setEncendido(Boolean encendido) {
        this.encendido = encendido;
    }
    
    public Auto(int velocidad,int capacidad,int año, String color,String modelo){
        this.velocidad= velocidad; 
        this.capacidad= capacidad; 
        this.año= año; 
        this.color= color;
        this.modelo= modelo; 
    
    }
    public Boolean encender_auto(){
    if(this.isEncendido()){
        return false; 
    }else {System.out.println("El auto está encendiendose"); 
           return true;}
    }

}
