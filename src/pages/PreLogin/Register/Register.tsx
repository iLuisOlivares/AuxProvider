import { Link } from "react-router-dom";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import { FormRegister } from "./FormRegister";
import HeaderPre from "../../../components/HeaderPre";

export const Register: React.FC = () => {

  return (
    <IonPage>
      <HeaderPre
        titulo="Registro de proveedor"></HeaderPre>
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
