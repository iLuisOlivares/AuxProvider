import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import Header from "../../../components/Header";

const Tecnico: React.FC = () => {
  const [texto, setTexto] = useState<string>();

  const [select, setSelect] = useState<string>();

  return (
    <IonPage>
      <Header
        titulo="Servicio tecnico"></Header>
      <IonContent>
        <IonList>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItemDivider color="primary">
                  <IonText> <h3> Contactanos:  Envianos tus recomendacion, reclamos o quejas</h3></IonText>
                </IonItemDivider>

                <IonItem>
                  <IonLabel position="floating">Asunto de contacto</IonLabel>
                  <IonSelect value={select} okText="Okay" cancelText="Dismiss" onIonChange={e => setSelect(e.detail.value)}>
                    <IonSelectOption value="Informacion erronea">Informacion erronea</IonSelectOption>
                    <IonSelectOption value="Servicios">Servicios</IonSelectOption>
                    <IonSelectOption value="Perfil">Perfil</IonSelectOption>
                    <IonSelectOption value="Otros">Otros</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Descripción</IonLabel>
                  <IonTextarea autocapitalize="on" rows={8} cols={30} placeholder="Escribenós, queremos saber lo que piensas" value={texto} onIonChange={e => setTexto(e.detail.value!)}></IonTextarea>
                </IonItem>
                <IonButton size="large" expand="block" fill="solid">Enviar</IonButton>


              </IonCol>

            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage >
  );
};

export default Tecnico;
