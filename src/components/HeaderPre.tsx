import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";


interface propsHeader {
  titulo: string
}

const HeaderPre: React.FC<propsHeader> = (props: propsHeader) => {
  var titulo = props.titulo;
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" />
        </IonButtons>
        <IonTitle>{titulo}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderPre;
