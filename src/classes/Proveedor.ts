import Perfil from "./Perfil";
import Servicio from "./Servicio";
import { Usuario } from "./Usuario";

export default class Proveedor extends Usuario{
    //Atributos
    protected Perfil: Perfil;
    protected servicios_list: Servicio[];
    protected tipo_proveedor: string;


    //Constructor   
    constructor(id_usuario: string, correo_electronico: string, contraseña: string, servicios_list: Servicio[], tipo_proveedor: string, nombre: string, email: string, celular: number, descripcion:string, pagina_web:string ){
        super(id_usuario, correo_electronico, contraseña);
        this.Perfil = new Perfil(nombre, email, celular, descripcion, pagina_web);
        this.servicios_list = servicios_list;
        this.tipo_proveedor = tipo_proveedor;
    }

    //Agregar un servicio del array de servicios
    agregar_servicio(nuevo_servicio: Servicio){
        return this.servicios_list.push(nuevo_servicio);
    }

    //Eliminar un servicio del array de servicios
    eliminar_servicio(servicio_id: number){
        return this.servicios_list.filter((e) => e.obtener_id() !== servicio_id);
    }

    //Obtener lista de servicios del proveedor
    obtener_servicio(){
        return this.servicios_list;
    }


}