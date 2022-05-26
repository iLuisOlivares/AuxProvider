/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { useEffect, useState } from "react";
import { PreLogin } from "./pages/PreLogin/PreLogin";
import { PosLogin } from "./pages/PosLogin/PosLogin";
import { IonApp, setupIonicReact } from "@ionic/react";
import { auth } from "./interface/Auth";
setupIonicReact();

const App: React.FC = () => {
  const [conectado, setConectado] = useState(() => {
    return getStorageValue("usuario", { conectado: false, token: "", usuario_id: 0, usuario_email: "" });
  });

  function getStorageValue(key: string, defaultValue: auth) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = saved != null ? JSON.parse(saved) : defaultValue;
    console.log(initial);
    return initial;
  }

  const setLocalStorage = (value: auth) => {
    setConectado(value);
    localStorage.setItem("usuario", JSON.stringify(value));
  };




  return (
    <IonApp>
      {!conectado.conectado ? (
        <PreLogin setStorage={setLocalStorage}></PreLogin>
      ) : (
        <PosLogin setStorage={setLocalStorage}></PosLogin>
      )}
    </IonApp>
  );
};

export default App;
