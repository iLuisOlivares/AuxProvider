import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";


interface propsHeader {
  titulo: string
}

const Header: React.FC<propsHeader> = (props: propsHeader) => {
  var titulo = props.titulo;
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>{titulo}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
