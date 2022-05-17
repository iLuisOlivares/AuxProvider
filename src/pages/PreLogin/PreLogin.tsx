import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route } from "react-router";
import { auth } from "../../interface/Auth";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

interface PropsPreLogin {
  setStorage: (estado: auth) => void;
}

export const PreLogin: React.FC<PropsPreLogin> = (props: PropsPreLogin) => {
  return (
    <IonReactRouter>
      <IonRouterOutlet id="ProviderAppM1">
        <Route exact path="/registrar">
          <Register />
        </Route>
        <Route exact path="/ingresar">
          <Login setStorage={props.setStorage} />
        </Route>
        <Route exact path="">
          <Redirect to="/ingresar"></Redirect>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
