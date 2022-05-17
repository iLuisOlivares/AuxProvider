import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Servicios: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Servicios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonCol>
            <h1>Servicios</h1>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Servicios;
