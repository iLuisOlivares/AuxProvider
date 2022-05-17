import { Link, Redirect, Route } from "react-router-dom";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { auth } from "../../../interface/Auth";

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
  const [correo, setCorreo] = useState<string>();
  const [contrasena, setContrasena] = useState<string>();

  const handleSend = async () => {
    const data = {
      usuario: correo,
      clave: contrasena,
    };
    console.log(data);
    // const respuestaJson = enviarData(URL_LOGIN, data);
    props.setStorage({ conectado: true, msg: "Iniciado correctamente" });
  };
  return (
    <IonPage>
      <IonContent>
        <form>
          <IonItem>
            <IonLabel position="floating">
              Correo electronico
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="email"
              name="correo"
              required
              value={correo}
              onIonChange={(e) => setCorreo(e.detail.value!)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Contraseña
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="password"
              name="clave"
              required
              value={contrasena}
              onIonChange={(e) => setContrasena(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton onClick={handleSend}>Iniciar Sesión</IonButton>
        </form>
        <IonItem>
          <IonText>
            ¿Aun no te has registrado?
            <Link to="/registrar">Hazlo aquí</Link>
          </IonText>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
