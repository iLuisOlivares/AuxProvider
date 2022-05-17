import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Header from "../../../components/Header";

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <Header></Header>
      <IonContent>
        <IonGrid>
          <IonCol>
            <h1>Inicio</h1>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
