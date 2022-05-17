
export default class Servicio{
    //Atributos
    protected id: number;
    protected area_servicio: string;
    protected servicio_especifico: string;

    //Constructor
    constructor(id: number, area_servicio: string, servicio_especifico: string){
        this.id = id;
        this.area_servicio = area_servicio;
        this.servicio_especifico = servicio_especifico;
    }

    //Editar servicio
    editar_servicio(area_servicio: string, servicio_especifico:string){
        this.area_servicio = area_servicio
        this.servicio_especifico = servicio_especifico
    }

    //Obtener la informancion del servicio
    obtener_informacion(){
        return [this.area_servicio, this.servicio_especifico]
    }

    //Obtener el id del servicio
    obtener_id(){
        return this.id
    }

    imprimir() {
        console.log(`id: ${this.id}, area_servicio:${this.area_servicio}, servicio_especifico:${this.servicio_especifico}`);
      }
}