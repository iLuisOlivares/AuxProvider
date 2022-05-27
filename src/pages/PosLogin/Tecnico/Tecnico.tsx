import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
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
} from "@ionic/react";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { getStorageValue } from "../../../interface/Auth";

interface Mensaje {
  status: string;
  mensaje: string
}

const Tecnico: React.FC = () => {
  const [body, setBody] = useState<string>();

  const [subject, setSubject] = useState<string>();

  const [conectado, setConectado] = useState(() => {
    return getStorageValue("usuario", { conectado: false, token: "", usuario_id: 1, usuario_email: "" });
  });

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [AlertMsj, setAlert] = useState<Mensaje>();

  const clearForm = () => {
    setBody("");
    setSubject("");
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      email: conectado.usuario_email,
      usuario_id: conectado.usuario_id,
      body: body,
      subject: subject
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:8080/email/send", requestOptions)
      .then((response) => response.status)
      .then((res) => {
        console.log(res);
        if (res) {
          const newMSJ = {
            status: "Enviado",
            mensaje: "Se ha enviado su mensaje, muchas gracias.",
          }
          setAlert(newMSJ);
          setShowAlert(true);
          clearForm();
        } else {
          console.log("No enviado");
        }
      }).catch(function () {
        console.log("Error");
      });;


  };


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
                  <IonSelect value={subject} okText="Okay" cancelText="Dismiss" onIonChange={e => setSubject(e.detail.value)}>
                    <IonSelectOption value="Informacion erronea">Informacion erronea</IonSelectOption>
                    <IonSelectOption value="Servicios">Servicios</IonSelectOption>
                    <IonSelectOption value="Perfil">Perfil</IonSelectOption>
                    <IonSelectOption value="Otros">Otros</IonSelectOption>
                  </IonSelect>
                </IonItem>

                <IonItem>
                  <form onSubmit={handleSubmit}>
                    <IonLabel className="ion-margin-top" position="floating">Descripción</IonLabel>
                    <IonTextarea required autocapitalize="on" rows={8} cols={30} placeholder="Escribenós, queremos saber lo que piensas" value={body} onIonChange={e => setBody(e.detail.value!)}></IonTextarea>
                    <IonButton type="submit" size="large" expand="block" fill="solid">Enviar</IonButton>
                  </form>

                </IonItem>
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={() => setShowAlert(false)}
                  header={AlertMsj?.status}
                  message={AlertMsj?.mensaje}
                  buttons={['Aceptar']}
                />

              </IonCol>

            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage >
  );
};

export default Tecnico;
