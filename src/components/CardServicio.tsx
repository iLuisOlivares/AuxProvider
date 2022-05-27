import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonActionSheet,
  IonModal,
  IonAlert,
} from "@ionic/react";
import {
  trash,
  close,
  createOutline,
  reorderThreeOutline,
} from "ionicons/icons";
import { PropsServicio } from "../data/servicios-context";
import { ModalServicio } from "./ModalServicio";
import { getStorageValue } from "../interface/Auth";

interface Mensaje {
  status: string;
  mensaje: string
}
export const CardServicio: React.FC<PropsServicio> = (props: PropsServicio) => {
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


  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [AlertMsj, setAlert] = useState<Mensaje>();


  const [conectado, setConectado] = useState(() => {
    return getStorageValue("usuario", { conectado: false, token: "", usuario_id: 1, usuario_email: "" });
  });

  const handleDelete = () => {
    const data = {
      id: id_servicio,
      activo: false
    }

    console.log(data)

    const bearer_token = conectado.token;
    const usuario_id = conectado.usuario_id;
    const url = "http://localhost:8080/api/servicios/update/" + usuario_id;

    const requestOptions = {

      method: metodo,
      headers: {
        "Content-Type": "application/json", Authorization: bearer_token,
      },
      body: JSON.stringify(data),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.error) {

          const newMSJ = {
            status: res.error,
            mensaje: "Servicio no eliminado",
          }
          setAlert(newMSJ);
          setShowAlert(true);
        }
        else {
          const newMSJ = {
            status: "Servicio eliminado",
            mensaje: "Servicio eliminado correctamente",
          }
          setAlert(newMSJ);
          setShowAlert(true);
        }
      });
  }


  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <IonCard onClick={() => setShowActionSheet(true)}>
        <IonItem>
          <IonIcon color="primary" slot="end" icon={reorderThreeOutline} />
          <IonLabel>{titulo}</IonLabel>
        </IonItem>
        <IonCardHeader>
          <IonCardSubtitle color="primary">{area_servicio}</IonCardSubtitle>
          <IonCardTitle>{servicio_especifico}</IonCardTitle>
          <IonCardSubtitle color="primary">
            {" "}
            <IonLabel color="dark">Precio: </IonLabel>
            {precio}
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>{descripcion}</IonCardContent>

        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => {
            setShowActionSheet(false);
          }}
          buttons={[
            {
              text: "Editar",
              icon: createOutline,
              handler: () => setShowModal(true),
            },
            {
              text: "Eliminar",
              role: "destructive",
              icon: trash,
              id: "delete-button",
              data: {
                type: "delete",
              },
              handler: () => handleDelete(),
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              },
            },
          ]}
        ></IonActionSheet>
      </IonCard>
      <IonModal isOpen={showModal}>
        <ModalServicio
          key={id_servicio + id_proveedor}
          id_servicio={id_servicio}
          id_proveedor={id_proveedor}
          area_servicio={area_servicio}
          servicio_especifico={servicio_especifico}
          descripcion={descripcion}
          precio={0}
          titulo={titulo}
          metodo={metodo}
        ></ModalServicio>
        <IonButton color="danger" onClick={() => setShowModal(false)}>
          Cerrar
        </IonButton>
      </IonModal>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={AlertMsj?.status}
        message={AlertMsj?.mensaje}
        buttons={['Aceptar']}
      />
    </>
  );
};
