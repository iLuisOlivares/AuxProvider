import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  constructOutline,
  helpBuoyOutline,
  personOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { auth } from "../../../interface/Auth";

const Inicio: React.FC = () => {


  return (
    <IonPage>
      <Header
        titulo="Inicio"></Header>
      <IonContent>
        <IonGrid>
          <IonCol>
            <IonButton color="primary" expand="block">
              <IonIcon slot="start" icon={personOutline} />
              Perfil
            </IonButton>
            <IonButton color="primary" expand="block">
              <IonIcon slot="start" icon={constructOutline} />
              Servicios
            </IonButton>

            <IonButton color="primary" expand="block">
              <IonIcon slot="start" icon={helpBuoyOutline} />
              Servicio cliente
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
