import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Header: React.FC = () => {
  var nombre = "inicio";
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>{nombre}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
