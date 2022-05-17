
export default class Servicio_cliente{
    //Atributos
    protected nombre: string;
    protected celular: number;
    protected email: string;
    protected descripcion: string;

    //Constructor    
    constructor(nombre: string, email: string, celular: number, descripcion:string){
        this.nombre = nombre;
        this.email = email;
        this.celular = celular;
        this.descripcion = descripcion;
    }

    //Enviar correo
    enviar_correo(){
    console.log('Enviar correo');
    }
    //Realizar llamada
    llamar(){
    console.log('Llamar');
    }

    //Enviar mensaje de whatsapp
    mensaje_whatsapp(){
    console.log('Enviar mensaje whatsapp');
    }
}