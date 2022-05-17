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

const Tecnico: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tecnico</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonCol>
            <h1>Tecnico</h1>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tecnico;
