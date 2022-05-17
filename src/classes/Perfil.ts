
export default class Perfil{
    protected nombre: string;
    protected email: string;
    protected celular: number;
    protected descripcion: string;
    protected pagina_web: string;

    
    constructor(nombre: string, email: string, celular: number, descripcion:string, pagina_web:string ){
        this.nombre = nombre;
        this.email = email;
        this.celular = celular;
        this.descripcion = descripcion;
        this.pagina_web = pagina_web;
    }

    editar_perfil(nombre: string, email: string, celular: number, descripcion:string, pagina_web:string ){
        this.nombre = nombre;
        this.email = email;
        this.celular = celular;
        this.descripcion = descripcion;
        this.pagina_web = pagina_web;   
    }

    obtener_perfil(){
        return [this.nombre,
            this.email,
            this.celular,
            this.descripcion,
            this.pagina_web, ]
    }
    

}