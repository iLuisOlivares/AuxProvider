import {
  IonAlert,
  IonButton,
  IonCard,
  IonCardHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/react";
import React, { useState } from "react";
import { PropsServicio } from "../data/servicios-context";
import { categorias } from "../data/serviciosData";
import { getStorageValue } from "../interface/Auth";

interface Mensaje {
  status: string;
  mensaje: string
}

export const ModalServicio: React.FC<PropsServicio> = (
  props: PropsServicio
) => {
  const {
    id_servicio,
    id_proveedor,
    area_servicio,
    titulo,
    servicio_especifico,
    descripcion,
    precio,
    metodo
  } = props;
  const [uarea_servicio, setArea] = useState<string>(area_servicio);
  const [uservicio_especifico, setServicio] = useState<string>(servicio_especifico);
  const [areaID, setAreaID] = useState<number>(1);
  const [servicioID, setServicioID] = useState<number>(0);

  const [utitulo, setTitulo] = useState<string>(titulo);
  const [udescripcion, setDescripcion] = useState<string>(descripcion);
  const [uprecio, setPrecio] = useState<number>(precio);
  const [uid, setid] = useState<number>(id_servicio);


  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [AlertMsj, setAlert] = useState<Mensaje>();

  const [conectado, setConectado] = useState(() => {
    return getStorageValue("usuario", { conectado: false, token: "", usuario_id: 1, usuario_email: "" });
  });


  const handleClick = () => {
    const data = {
      id: id_servicio,
      area_servicio: uarea_servicio,
      titulo: utitulo,
      servicio_especifico: uservicio_especifico,
      descripcion: udescripcion,
      precio: uprecio,
      activo: true
    }

    const bearer_token = conectado.token;
    const usuario_id = conectado.usuario_id;
    const url = "http://localhost:8080/api/servicios/update/" + usuario_id;

    const requestOptions = {


      method: metodo,
      headers: {
        "Content-Type": "application/json", Authorization: bearer_token,
      },
      body: JSON.stringify(data),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          const newMSJ = {
            status: res.error,
            mensaje: "Servicio no Guardado",
          }
          setAlert(newMSJ);
          setShowAlert(true);
        }
        else {
          const newMSJ = {
            status: "Servicio",
            mensaje: "Servicio guardado correctamente",
          }

          setAlert(newMSJ);
          setShowAlert(true);
        }
      });
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonInput
            placeholder="Ingresar titulo"
            value={utitulo}
            onIonChange={(e) => setTitulo(e.detail.value!)}
            required
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Area</IonLabel>
          <IonSelect
            value={uarea_servicio}
            placeholder="Seleciona el area"
            onIonChange={(e) => setArea(e.detail.value)}
          >
            {
              categorias.map((categoria, id) => (
                <IonSelectOption value={categoria.area}>{categoria.area}</IonSelectOption>
              ))
            }
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Servicio</IonLabel>
          <IonSelect
            value={uservicio_especifico}
            placeholder="Seleciona el servicio"
            onIonChange={(e) => setServicio(e.detail.value)}
          >
            {

              categorias[2].servicios.map((servicio) => (
                <IonSelectOption value={servicio}>{servicio}</IonSelectOption>
              ))
            }
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonInput
            value={uprecio}
            type="number"
            placeholder="Ingrese el precio"
            color="dark"
            onIonChange={(e) => setPrecio(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonTextarea
            value={udescripcion}
            placeholder="Ingrese la descripcion"
            onIonChange={(e) => setDescripcion(e.detail.value!)}
          ></IonTextarea>
        </IonItem>

        <IonButton expand="block" onClick={handleClick} color="primary">
          Actualizar Servicio
        </IonButton>
      </IonCardHeader>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={AlertMsj?.status}
        message={AlertMsj?.mensaje}
        buttons={['Aceptar']}
      />
    </IonCard >
  );
};
