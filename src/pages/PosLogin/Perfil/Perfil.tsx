import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonListHeader,
  IonTextarea,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

import React, { useState } from "react";

const Perfil: React.FC = () => {
  const [nombre, setNombre] = useState<string>("");
  const [apellidos, setApellidos] = useState<string>();
  const [descripcion, setDescripcion] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [direccion, setDireccion] = useState<string>();
  const [ciudad, setCiudad] = useState<string>();
  const [celular, setCelular] = useState<number>();
  const [foto, setFoto] = useState<string>();
  const [paginaWeb, setPweb] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider color="primary">Informacion Basica</IonItemDivider>
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Nombres
            </IonLabel>
            <IonInput
              value={nombre}
              placeholder="Ingresa tu nombre"
              onIonChange={(e) => setNombre(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Apellidos
            </IonLabel>
            <IonInput
              value={apellidos}
              placeholder="Ingresa tu apellido"
              onIonChange={(e) => setApellidos(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Descripcion
            </IonLabel>
            <IonTextarea
              value={descripcion}
              placeholder="Describe como eres 😃"
              onIonChange={(e) => setDescripcion(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          <IonItemDivider color="primary">
            Informacion de contacto
          </IonItemDivider>
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Email
            </IonLabel>
            <IonInput
              value={email}
              placeholder="Ingresa tu correo electronico"
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Numero celular
            </IonLabel>
            <IonInput
              type="number"
              value={celular}
              placeholder="Ingresa tu celular"
              onIonChange={(e) => setCelular(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>
          <IonItemDivider color="primary">
            Informacion de Localizacion
          </IonItemDivider>
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Dirección
            </IonLabel>
            <IonInput
              value={direccion}
              placeholder="Ingresa tu direccion"
              onIonChange={(e) => setDireccion(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Ciudad</IonLabel>
            <IonSelect
              value={ciudad}
              placeholder="Selecciona tu ciudad"
              onIonChange={(e) => setCiudad(e.detail.value)}
            >
              <IonSelectOption value="Bogota">Bogota</IonSelectOption>
              <IonSelectOption value="Cartagena">Cartagena</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider color="primary">Otros </IonItemDivider>
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Pagina Web
            </IonLabel>
            <IonInput
              value={paginaWeb}
              placeholder="Ingresa tu pagina web"
              onIonChange={(e) => setPweb(e.detail.value!)}
              readonly={true}
            ></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
