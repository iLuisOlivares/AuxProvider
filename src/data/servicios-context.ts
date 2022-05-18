
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
