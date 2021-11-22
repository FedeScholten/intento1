package operaciones;

public class Operaciones {
    public int numero1, numero2;
    public String op;
    public Operaciones(int numero1, int numero2, String op){
        this.numero1= numero1;
        this.numero2= numero2; 
        this.op= op; 
    }
    public int Operaciones(){
        switch (op) {
            case "+":
                return numero1 + numero2;
            case "-":
                return numero1 - numero2;
            case "*":
                return numero1 * numero2;
            case "/":
                return numero1/numero2;
            default:
                return 0;
        }
    }
}
