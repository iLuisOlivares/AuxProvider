import React from "react";
import { Dispatch, SetStateAction } from "react";

export type AreaType = ''

export interface auth {
  conectado: boolean;
  msg: string;
}
export interface Servicio {
  id: number;
  id_proveedor: number;
  area_servicio: string;
  servicio_especifico: string;
  descripcion: string;
  precio: number;
}

export interface ModalProps {
  router: HTMLIonRouterOutletElement | null;
}
interface PropsPreLogin {
  setStorage: (estado: auth) => void;
}

interface servicioInterface {
  id: number;
  id_proveedor: number;
  area_servicio: string;
  servicio_especifico: string;
  descripcion: string;
  precio: number;
  titulo: string;
}
export interface PropsServicio {
  id_servicio: number;
  id_proveedor: number;
  titulo: string;
  area_servicio: string;
  servicio_especifico: string;
  descripcion: string;
  precio: number;
  metodo: string;

}

export interface InputsForm {
  id: number,
  tipo_id: string,
  activo: boolean,
  usuario: {
      email: string,
      clave: string,
  },
  perfil: {
      apellidos: string,
      celular: number,
      direccion: string,
      ciudad: string,
      foto: string,
      nombre: string,
      pagina_web: string,
      descripcion: string,
  },

}

const bearer_token = "Bearer " + "acces_token";
                    const url = "https://aux-backend.herokuapp.com/api/proveedor/email/" ;
                    const requestOptions = {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json", Authorization: bearer_token
                        },
                    };
                    fetch(url, requestOptions)
                        .then((response) => response.json())
                        .then((res) => {
                            console.log(res);
                        })