import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  useIonActionSheet,
  IonActionSheet,
} from "@ionic/react";
import {
  trash,
  share,
  caretForwardCircle,
  heart,
  close,
  createOutline,
  fingerPrintOutline,
} from "ionicons/icons";

interface PropsServicio {
  id_servicio: number;
  id_proveedor: number;
  titulo: string;
  area_servicio: string;
  servicio_especifico: string;
  descripcion: string;
  precio: number;
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
  } = props;
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonCard onClick={() => setShowActionSheet(true)}>
      <IonItem>
        <IonButton fill="outline" slot="end">
          actualizar
        </IonButton>
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
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: "Editar",
            icon: createOutline,
            data: 10,
            handler: () => {
              console.log("Share clicked");
            },
          },
          {
            text: "Eliminar",
            role: "destructive",
            icon: trash,
            id: "delete-button",
            data: {
              type: "delete",
            },
            handler: () => {
              console.log("Delete clicked");
            },
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
  );
};
