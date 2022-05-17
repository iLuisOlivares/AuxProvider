
export default class Membresia{
    //Atributos
    protected nombre: string;
    protected tipo_membresia: number;
    protected precio: number;
    protected duracion: number;
    protected descripcion: string;

    //Constructor    
    constructor(nombre: string, tipo_membresia: number, precio: number,duracion:number, descripcion:string){
        this.nombre = nombre;
        this.tipo_membresia = tipo_membresia;
        this.precio = precio;
        this.duracion = duracion;
        this.descripcion = descripcion;
    }

    obtener_membresia(){
        return [this.nombre, this.tipo_membresia, this.precio, this.duracion, this.descripcion]
    }


}