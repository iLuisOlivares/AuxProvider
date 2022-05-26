import { Link, Redirect, Route } from "react-router-dom";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { auth } from "../../../interface/Auth";
import { FormLogin } from "./FormLogin";
import Header from "../../../components/Header";

import "./stylelogin.css";

interface Props {
  title: string;
}

const URL_LOGIN = "https://api-rest-aux.herokuapp.com/login_usuarios.php";

const enviarData = async (url: string, data: object) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await resp.json();
  console.log(json);
  return json.conectado;
};

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
