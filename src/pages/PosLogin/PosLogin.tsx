import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { homeOutline, logOutOutline } from "ionicons/icons";
import { personOutline } from "ionicons/icons";
import { constructOutline } from "ionicons/icons";
import { helpBuoyOutline } from "ionicons/icons";
import Inicio from "./Inicio/Inicio";
import Perfil from "./Perfil/Perfil";
import Servicios from "./Servicios/Servicios";
import Tecnico from "./Tecnico/Tecnico";
import { auth } from "../../interface/Auth";

interface PropsPosLogin {
  setStorage: (estado: auth) => void;
}
export const PosLogin: React.FC<PropsPosLogin> = (props: PropsPosLogin) => {

  const [conectado, setConectado] = useState(() => {
    return getStorageValue("usuario", { conectado: false, token: "", usuario_id: 1, usuario_email: "" });
  });

  function getStorageValue(key: string, defaultValue: auth) {
    const saved = localStorage.getItem(key);
    const initial = saved != null ? JSON.parse(saved) : defaultValue;
    return initial;
  }

  const handleClick = () => {
    props.setStorage({ conectado: false, usuario_id: 0, token: "", usuario_email: "" });
  };
  return (
    <IonReactRouter>
      <IonMenu side="start" contentId="ProviderAppM2">
        <IonHeader>
          <IonToolbar color="light">
            <IonItem routerLink="/Perfil">
              <IonAvatar slot="start">
                <img
                  alt="perfil"
                  src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                />
              </IonAvatar>
              <IonLabel>{conectado.usuario_email}</IonLabel>
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/inicio" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={homeOutline} />
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem routerLink="/perfil" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={personOutline} />
              <IonLabel>Perfil</IonLabel>
            </IonItem>
            <IonItem
              routerLink="/servicios"
              routerDirection="none"
              lines="none"
            >
              <IonIcon color="medium" slot="start" icon={constructOutline} />
              <IonLabel>Servicios</IonLabel>
            </IonItem>
            {/* <IonItem
            routerLink="/Membresia"
            routerDirection="none"
            lines="none"
          >
            <IonIcon color="medium" slot="start" icon={diamondOutline} />
            <IonLabel>Membresia</IonLabel>
          </IonItem> */}
            <IonItem
              routerLink="/servicio_tecnico"
              routerDirection="none"
              lines="none"
            >
              <IonIcon color="medium" slot="start" icon={helpBuoyOutline} />
              <IonLabel>Servicio tecnico</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonIcon color="medium" slot="start" icon={logOutOutline} />
              <IonLabel onClick={handleClick}>Cerrar Sesi??n</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="ProviderAppM2">
        <Route exact path="/inicio">
          <Inicio />
        </Route>

        <Route exact path="/perfil">
          <Perfil />
        </Route>
        <Route exact path="/Servicios">
          <Servicios />
        </Route>
        {/* <Route exact path="/Membresia">
        <Membresia />
      </Route> */}
        <Route exact path="/Servicio_tecnico">
          <Tecnico />
        </Route>
        <Route exact path="">
          <Redirect to="/inicio"></Redirect>
        </Route>
        <Route exact path="/ingresar">
          <Redirect to="/inicio"></Redirect>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
