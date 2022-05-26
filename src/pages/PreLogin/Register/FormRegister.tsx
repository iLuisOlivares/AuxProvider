import { Link, Redirect, Route } from "react-router-dom";
import {
    IonAlert,
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

interface Mensaje {
    status: string;
    mensaje: string
}


export const FormRegister = () => {

    const [identificacion, setIdentificacion] = useState<string>("Cedula");
    const [numero_identificacion, setNumeroIdentificacion] = useState<string>();
    const [contrasena, setContrasena] = useState<string>();
    const [repeat_contrasena, setRepeat_contrasena] = useState<string>();
    const [nombres, setNombre] = useState<string>();
    const [apellidos, setApellidos] = useState<string>();
    const [correo_electronico, setCorreo_electronico] = useState<string>();
    const [celular, setCelular] = useState<string>();
    const [direccion, setDireccion] = useState<string>();
    const [ciudad, setCiudad] = useState<string>("Bogota");
    const [pagina_web, setPagina_web] = useState<string>();
    const [descripcion, setDescripcion] = useState<string>();

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [AlertMsj, setAlert] = useState<Mensaje>();

    const clearForm = () => {
        setApellidos("");
        setIdentificacion("Cedula");
        setCelular("");
        setNombre("");
        setCorreo_electronico("");
        setDescripcion("");
        setPagina_web("");
        setDireccion("");
        setCiudad("Bogota");
        setNumeroIdentificacion("")
        setContrasena("");
        setRepeat_contrasena("");
    }


    const handleSubmitt = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const data = {
            id: numero_identificacion,
            tipo_id: identificacion,
            activo: true,
            usuario: {
                email: correo_electronico,
                clave: contrasena,
            },
            perfil: {
                apellidos: apellidos,
                celular: celular,
                direccion: direccion,
                ciudad: ciudad,
                foto: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
                nombre: nombres,
                pagina_web: pagina_web,
                descripcion: descripcion,
            },
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch("http://localhost:8080/api/proveedor/save", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                if (res.error) {

                    const newMSJ = {
                        status: res.error,
                        mensaje: "No registrado",
                    }
                    setAlert(newMSJ);
                    setShowAlert(true);
                }
                else {
                    const newMSJ = {
                        status: "Registrado",
                        mensaje: "Usuario registrado correctamente",
                    }
                    setAlert(newMSJ);
                    setShowAlert(true);
                    clearForm();
                }

            });
    };

    return (
        <form onSubmit={handleSubmitt} className="ion-padding">
            <IonItem>
                <IonLabel>Tipo de identificacion</IonLabel>
                <IonSelect
                    ok-text="Seleccionar"
                    cancel-text="Cancelar"
                    value={identificacion}
                    placeholder="Identificacion"
                    onIonChange={(e) => setIdentificacion(e.detail.value)}
                >
                    <IonSelectOption defaultChecked value="Cedula">
                        Cedula
                    </IonSelectOption>
                    <IonSelectOption value="Pasaporte">Pasaporte</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">
                    Numero de identificacion
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    value={numero_identificacion}
                    onIonChange={(e) => setNumeroIdentificacion(e.detail.value!)}
                    type="number"
                    name="identificacion"
                    required
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Contraseña
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    onIonChange={(e) => setContrasena(e.detail.value!)}
                    value={contrasena}
                    type="password"
                    name="clave"
                    required
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Confirmar Contraseña
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    value={repeat_contrasena}
                    onIonChange={(e) => setRepeat_contrasena(e.detail.value!)}
                    type="password"
                    name="claveConfirm"
                    required
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Nombres
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    value={nombres}
                    onIonChange={(e) => setNombre(e.detail.value!)}
                    type="text"
                    name="nombres"
                    required
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Apellidos
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    value={apellidos}
                    onIonChange={(e) => setApellidos(e.detail.value!)}
                    type="text"
                    name="apellidos"
                    required
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Correo electronico
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    value={correo_electronico}
                    onIonChange={(e) => setCorreo_electronico(e.detail.value!)}
                    type="email"
                    name="correo"
                    required
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Celular
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    value={celular}
                    onIonChange={(e) => setCelular(e.detail.value!)}
                    type="number"
                    name="celular"
                    required
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Direccion
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    value={direccion}
                    onIonChange={(e) => setDireccion(e.detail.value!)}
                    type="text"
                    name="direccion"
                    required
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>
                    Ciudad
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonSelect
                    ok-text="Seleccionar"
                    cancel-text="Cancelar"
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
                    value={pagina_web}
                    onIonChange={(e) => setPagina_web(e.detail.value!)}
                    type="text"
                    name="webPage"
                ></IonInput>
            </IonItem>

            <IonItem>
                <IonTextarea
                    placeholder="Ingresa una descripcion acerca de ti"
                    value={descripcion}
                    onIonChange={(e) => setDescripcion(e.detail.value!)}
                ></IonTextarea>
            </IonItem>

            <IonButton type="submit" className="ion-margin-top" expand="block">
                Registrate
            </IonButton>

            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={AlertMsj?.status}
                message={AlertMsj?.mensaje}
                buttons={['Aceptar']}
            />
        </form>
    )
}
function useForm<T>(): { register: any; handleSubmit: any; reset: any; formState: { errors: any; }; } {
    throw new Error("Function not implemented.");
}

