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
import React from "react";
import Header from "../../../components/Header";

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <Header></Header>
      <IonContent>
        <IonGrid>
          <IonCol>
            <IonButton color="tertiary" expand="block">
              <IonIcon slot="start" icon={personOutline} />
              Perfil
            </IonButton>
            <IonButton color="tertiary" expand="block">
              <IonIcon slot="start" icon={constructOutline} />
              Servicios
            </IonButton>

            <IonButton color="tertiary" expand="block">
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
