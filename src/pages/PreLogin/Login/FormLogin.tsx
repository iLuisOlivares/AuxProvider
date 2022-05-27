import {
    IonAlert,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { auth } from "../../../interface/Auth";

interface PropsLogin {
    setStorage: (estado: auth) => void;
}

interface Mensaje {
    status: string;
    mensaje: string
}


export const FormLogin: React.FC<PropsLogin> = (props: PropsLogin) => {
    const [correo, setCorreo] = useState<string>("");
    const [contrasena, setContrasena] = useState<string>("");
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [AlertMsj, setAlert] = useState<Mensaje>();



    const handleSend = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (correo !== "" && contrasena !== "") {



            var data = new URLSearchParams();
            data.append('email', correo);
            data.append('clave', contrasena);

            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*',
                },
                body: new URLSearchParams(data),
            };
            fetch("http://localhost:8080/api/login  ", requestOptions)
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);
                    if (res.conectado) {
                        const bearer_token = "Bearer " + res.acces_token;
                        const url = "http://localhost:8080/api/proveedor/email/" + res.usuario_id;
                        const requestOptions = {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json", Authorization: bearer_token
                            },
                        };
                        fetch(url, requestOptions)
                            .then((response) => response.json())
                            .then((res2) => {
                                console.log(res2);
                                props.setStorage({ conectado: true, token: "Bearer " + res.acces_token, usuario_email: res.usuario_id, usuario_id: res2.id });
                            })
                    }
                    else {
                        const newMSJ = {
                            status: "Credenciales no validas",
                            mensaje: "Vuelta a intentarlo por favor",
                        }
                        setAlert(newMSJ);
                        setShowAlert(true);
                    }
                });
        } else {
            const newMSJ = {
                status: "Ingrese los campos solicitados",
                mensaje: "Vuelta a intentarlo por favor",
            }
            setAlert(newMSJ);
            setShowAlert(true);
        }
    }


    return (
        <form onSubmit={handleSend} className="ion-padding">
            <IonItem>
                <IonLabel position="floating">
                    Correo electronico
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    type="email"
                    name="correo"
                    value={correo}
                    onIonChange={(e) => setCorreo(e.detail.value!)}
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">
                    Contraseña
                    <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                    type="password"
                    name="clave"
                    value={contrasena}
                    onIonChange={(e) => setContrasena(e.detail.value!)}
                ></IonInput>
            </IonItem>
            <IonButton type="submit" className="ion-margin-top" expand="block" >Iniciar Sesión</IonButton>
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
