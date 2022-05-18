import { IonButton, IonContent, IonPage, useIonModal } from "@ionic/react";
import React, { useState } from "react";
import Servicios from "../pages/PosLogin/Servicios/Servicios";

export const ModalServicioGestion = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDismiss = () => {
    dismiss();
  };

  /**
   * First parameter is the component to show, second is the props to pass
   */
  const [present, dismiss] = useIonModal(Servicios, {
    count,
    onDismiss: handleDismiss,
    onIncrement: handleIncrement,
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() => {
            present({
              cssClass: "my-class",
            });
          }}
        >
          Show Modal
        </IonButton>
        <div>Count: {count}</div>
      </IonContent>
    </IonPage>
  );
};
