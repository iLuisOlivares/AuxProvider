import {
  IonButton,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonModal,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React, { useState } from "react";
import { PropsServicio } from "../data/servicios-context";
import { ModalServicio } from "./ModalServicio";



export const NuevoServicio: React.FC<PropsServicio> = (
  props: PropsServicio
) => {
  const {
    id_servicio,
    id_proveedor,
    area_servicio,
    titulo,
    servicio_especifico,
    descripcion,
    precio,
    metodo,
  } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonButton expand="block" onClick={() => setShowModal(true)}>
        Nuevo servicio
        <IonIcon slot="start" icon={addOutline} />
      </IonButton>

      <IonGrid>

        <IonModal isOpen={showModal}>
          <ModalServicio
            id_servicio={id_servicio}
            id_proveedor={id_proveedor}
            area_servicio={area_servicio}
            servicio_especifico={servicio_especifico}
            descripcion={descripcion}
            precio={precio}
            titulo={titulo}
            metodo={metodo}
          ></ModalServicio>
          <IonButton color="danger" onClick={() => setShowModal(false)}>
            Cerrar
          </IonButton>
        </IonModal>

      </IonGrid>
    </>
  );
};
