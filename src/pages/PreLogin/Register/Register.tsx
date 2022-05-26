import { Link, Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import React, { useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { repeat } from "ionicons/icons";
import { FormRegister } from "./FormRegister";
import Header from "../../../components/Header";

export const Register: React.FC = () => {

  return (
    <IonPage>
      <Header
        titulo="Registro de proveedor"></Header>
      <IonContent>
        <FormRegister></FormRegister>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center"  >
              <IonText >
                ¿Ya tienes una cuenta? {" "}
                <Link to="/ingresar">Ingresa aquí</Link>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage >
  );
};
