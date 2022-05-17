
export class Usuario{
    //Atributos
    protected id_usuario: string;
    protected correo_electronico: string;
    protected contraseña: string;  

    //Constructor
    constructor(id_usuario: string, correo_electronico: string, contraseña: string){
        this.id_usuario = id_usuario;
        this.correo_electronico = correo_electronico;
        this.contraseña = contraseña;
    }

    //Validar usuario al iniciar sesión
    validar_usuario(){
        return false;
    }
}