import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Perfil: React.FC = () => {
  return (
   <IonPage>
       <IonHeader>
            <IonToolbar>
                <IonTitle>Perfil</IonTitle>
            </IonToolbar>
       </IonHeader>
       <IonContent>
            <IonGrid>
                <IonCol>
                    <h1>Perfil</h1>
                </IonCol>
            </IonGrid>
       </IonContent>
   </IonPage>
  )
}

export default Perfil