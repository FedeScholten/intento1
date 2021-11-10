package ingreso;

public class Datos {
    private String usuario,contraseña;
    private String miUsuario = "Fede";
    private String mipass = "12345";
   
    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    
    public String getUsuario(){
        return usuario; 
    }
    public void setUsuario(String usuario){
        this.usuario = usuario; 
    }
    public boolean validar(){
        if(usuario.equals(miUsuario) && contraseña.equals(mipass)){
            return true;
        } else {
            return false;
        }
    }
}
