import { Link } from "react-router-dom";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { auth } from "../../../interface/Auth";
import { FormLogin } from "./FormLogin";
import Header from "../../../components/Header";

import "./stylelogin.css";



interface PropsLogin {
  setStorage: (estado: auth) => void;
}

export const Login: React.FC<PropsLogin> = (props: PropsLogin) => {


  return (
    <IonPage>
      <Header
        titulo="Inicias sesión"></Header>
      <IonContent className="contenedor">
        <div >
          <FormLogin
            setStorage={props.setStorage}
          ></FormLogin>

          <IonGrid>
            <IonRow >
              <IonCol className="ion-text-center"  >
                <IonText>
                  ¿Aun no te has registrado? {" "}
                  <Link to="/registrar">Hazlo aquí</Link>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>

        </div>

      </IonContent>
    </IonPage>
  );
};
