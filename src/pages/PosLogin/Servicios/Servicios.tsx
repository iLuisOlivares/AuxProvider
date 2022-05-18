import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React, { useState } from "react";
import { CardServicio } from "../../../components/CardServicio";

const Servicios: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const number = 12000;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Servicios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="focus"
        ></IonSearchbar>
        <IonGrid>
          <IonButton color="primary" expand="block">
            {" "}
            <IonIcon slot="start" icon={addOutline} />
          </IonButton>
          <CardServicio
            id_servicio={0}
            id_proveedor={0}
            area_servicio={"area"}
            servicio_especifico={"servicio"}
            descripcion={"descripcion"}
            precio={0}
            titulo={"titulo"}
          ></CardServicio>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Servicios;
