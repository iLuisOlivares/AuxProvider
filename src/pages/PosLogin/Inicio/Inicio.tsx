import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
} from "@ionic/react";
import {
  constructOutline,
  helpBuoyOutline,
  personOutline,
} from "ionicons/icons";
import React from "react";
import Header from "../../../components/Header";

const Inicio: React.FC = () => {


  return (
    <IonPage>
      <Header
        titulo="Inicio"></Header>
      <IonContent>
        <IonGrid>
          <IonCol>
            <IonButton routerLink="/perfil" color="primary" expand="block">
              <IonIcon slot="start" icon={personOutline} />
              Perfil
            </IonButton>
            <IonButton routerLink="/servicios" color="primary" expand="block">
              <IonIcon slot="start" icon={constructOutline} />
              Servicios
            </IonButton>

            <IonButton routerLink="/servicio_tecnico" color="primary" expand="block">
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
