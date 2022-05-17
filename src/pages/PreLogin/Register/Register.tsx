import { Link, Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonPage,
  IonRouterOutlet,
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

export const Register: React.FC = () => {
  const [identificacion, setIdentificacion] = useState<string>();
  const [ciudad, setCiudad] = useState<string>();
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonContent>
        <form>
          <IonItem>
            <IonLabel>Tipo de identificacion</IonLabel>
            <IonSelect
              value={identificacion}
              placeholder="Identificacion"
              onIonChange={(e) => setIdentificacion(e.detail.value)}
            >
              <IonSelectOption value="Cedula">Cedula</IonSelectOption>
              <IonSelectOption value="Pasaporte">Pasaporte</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">
              Numero de identificacion
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="number"
              name="identificacion"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Contraseña
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput type="password" name="clave" required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Confirmar Contraseña
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput type="password" name="claveConfirm" required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Nombres
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="text"
              name="nombres"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Apellidos
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="text"
              name="apellidos"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Correo electronico
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="email"
              name="correo"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Celular
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="number"
              name="celular"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Direccion
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              type="text"
              name="direccion"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>
              Ciudad
              <IonText color="danger">*</IonText>
            </IonLabel>
            <IonSelect
              value={ciudad}
              placeholder="Ciudad"
              onIonChange={(e) => setCiudad(e.detail.value)}
            >
              <IonSelectOption value="Bogota">Bogota</IonSelectOption>
              <IonSelectOption value="Medellin">Medellin</IonSelectOption>
              <IonSelectOption value="Cartagena">Cartagena</IonSelectOption>
              <IonSelectOption value="Barranquilla">
                Barranquilla
              </IonSelectOption>
              <IonSelectOption value="Sincelejo">Sincelejo</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Pagina Web</IonLabel>
            <IonInput
              type="text"
              name="webPage"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea
              placeholder="Ingresa una descripcion acerca de ti"
              value={text}
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonTextarea>
          </IonItem>

          <IonButton>Registrate</IonButton>
        </form>
        <IonItem>
          <IonText>
            ¿Ya tienes una cuenta?
            <Link to="/ingresar">Ingresa aquí</Link>
          </IonText>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
