import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { CardServicio } from "../../../components/CardServicio";
import Header from "../../../components/Header";
import { NuevoServicio } from "../../../components/NuevoServicio";
import { getStorageValue } from "../../../interface/Auth";


interface servicioInterface {
  id: number;
  id_proveedor: number;
  area_servicio: string;
  servicio_especifico: string;
  descripcion: string;
  precio: number;
  titulo: string;
}

const Servicios: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [servicios, setServicios] = useState<servicioInterface[] | undefined>([]);
  const [filterDisplay, setFilterDisplay] = useState<servicioInterface[] | undefined>([]);

  const [conectado, setConectado] = useState(() => {
    return getStorageValue("usuario", { conectado: false, token: "", usuario_id: 1, usuario_email: "" });
  });


  useEffect(() => {
    let oldList = servicios?.map(servicio => {
      return {
        id: servicio.id,
        id_proveedor: conectado.usuario_id,
        area_servicio: servicio.area_servicio,
        servicio_especifico: servicio.servicio_especifico,
        descripcion: servicio.descripcion,
        precio: servicio.precio,
        titulo: servicio.titulo,
      };
    });
    if (searchText !== "") {
      let newList: servicioInterface[] | undefined = [];
      newList = oldList?.filter(servicio =>
        servicio.area_servicio.toUpperCase().includes(searchText.toUpperCase()) || servicio.servicio_especifico.toUpperCase().includes(searchText.toUpperCase())
        || servicio.titulo.toUpperCase().includes(searchText.toUpperCase()));
      setFilterDisplay(newList);
      console.log(newList);

    } else {
      setFilterDisplay(servicios);
    }

  }, [servicios, searchText]);



  useEffect(() => {
    const bearer_token = conectado.token;
    const url = "http://localhost:8080/api/servicios/" + conectado.usuario_id;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json", Authorization: bearer_token
      },
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setServicios(res);
        console.log(res);
      })
  }, []);


  return (
    <IonPage>
      <Header titulo="Servicios"></Header>
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="focus"
        ></IonSearchbar>

        <NuevoServicio
          id_servicio={0}
          id_proveedor={0}
          area_servicio={""}
          servicio_especifico={""}
          descripcion={""}
          precio={0}
          titulo={""}
          metodo={"POST"}
        ></NuevoServicio>

        {
          filterDisplay?.map(servicio => (
            <CardServicio
              key={servicio.id}
              id_servicio={servicio.id}
              id_proveedor={conectado.usuario_id}
              area_servicio={servicio.area_servicio}
              servicio_especifico={servicio.servicio_especifico}
              descripcion={servicio.descripcion}
              precio={servicio.precio}
              titulo={servicio.titulo}
              metodo={"PUT"}
            >
            </CardServicio>

          ))
        }


      </IonContent>
    </IonPage>
  );
};

export default Servicios;
