import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonAlert,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { auth, getStorageValue } from "../../../interface/Auth";


interface Mensaje {
  status: string;
  mensaje: string
}
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

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [AlertMsj, setAlert] = useState<Mensaje>();

  const [conectado, setConectado] = useState(() => {
    return getStorageValue("usuario", { conectado: false, token: "", usuario_id: 1, usuario_email: "" });
  });

  useEffect(() => {
    const bearer_token = conectado.token;
    const url = "http://localhost:8080/api/perfil/" + conectado.usuario_id;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json", Authorization: bearer_token
      },
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setApellidos(res.apellidos);
        setCelular(res.celular);
        setCiudad(res.ciudad)
        setDescripcion(res.descripcion);
        setDireccion(res.direccion);
        setNombre(res.nombre);
        setFoto(res.foto);
        setPweb(res.pagina_web);
      })
  }, []);

  const handleClick = () => {
    const data = {
      apellidos: apellidos,
      celular: celular,
      ciudad: ciudad,
      direccion: direccion,
      foto: foto,
      nombre: nombre,
      pagina_web: paginaWeb,
      descripcion: descripcion,
    }
    const bearer_token = conectado.token;
    const url = "http://localhost:8080/api/perfil/update/" + conectado.usuario_id;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", Authorization: bearer_token
      },
      body: JSON.stringify(data),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          const newMSJ = {
            status: res.error,
            mensaje: "No Actualizado",
          }
          setAlert(newMSJ);
          setShowAlert(true);
        }
        else {


          const newMSJ = {
            status: "Perfil Guardado",
            mensaje: "Perfil ha sido actualizado correctamente",
          }
          setAlert(newMSJ);
          setShowAlert(true);
        }
        console.log(res);
        setApellidos(res.apellidos);
        setCelular(res.celular);
        setCiudad(res.ciudad)
        setDescripcion(res.descripcion);
        setDireccion(res.direccion);
        setNombre(res.nombre);
        setFoto(res.foto);
        setPweb(res.pagina_web);
      })

  }

  return (
    <IonPage>
      <Header
        titulo="Perfil"
      >

      </Header>
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
              placeholder="Describe como eres "
              onIonChange={(e) => setDescripcion(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          <IonItemDivider color="primary">
            Informacion de contacto
          </IonItemDivider>
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
          <IonItem>
            <IonLabel color="primary" position="stacked">
              Pagina Web
            </IonLabel>
            <IonInput
              value={paginaWeb}
              placeholder="Ingresa tu pagina web"
              onIonChange={(e) => setPweb(e.detail.value!)}
            // readonly={true}
            ></IonInput>
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              header={AlertMsj?.status}
              message={AlertMsj?.mensaje}
              buttons={['Aceptar']}
            />
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
              <IonSelectOption value="Medellin">Medellin</IonSelectOption>
              <IonSelectOption value="Cartagena">Cartagena</IonSelectOption>
              <IonSelectOption value="Barranquilla">
                Barranquilla
              </IonSelectOption>
              <IonSelectOption value="Sincelejo">Sincelejo</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider color="light">
          </IonItemDivider>
          <IonButton onClick={handleClick} size="small" expand="block" slot="end">
            Guardar
          </IonButton>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Perfil;
