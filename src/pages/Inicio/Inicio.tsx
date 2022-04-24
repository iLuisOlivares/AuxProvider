import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Inicio: React.FC = () => {


  return (
   <IonPage>
       <IonHeader>
            <IonToolbar>
                <IonTitle>Inicio</IonTitle>
            </IonToolbar>
       </IonHeader>
       <IonContent>
            <IonGrid>
                <IonCol>
                    <h1>Inicio</h1>
                </IonCol>
            </IonGrid>

       </IonContent>
   </IonPage>
  )
}

export default Inicio