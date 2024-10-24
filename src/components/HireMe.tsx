import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonItem,
  IonText,
} from "@ionic/react";
import React from "react";
import foto from "../assets/personal.jpg";

const HireMe = () => {
  return (
    <>
      <IonContent>
        <IonCard>
          <IonCardHeader style={{ display: 'flex', justifyContent: 'center' }}>
            <IonAvatar style={{ width: '100px', height: '100px' }}>
              <img src={foto} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </IonAvatar>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonText>
                <b>Nombre:</b> Christopher Mercado
              </IonText>
            </IonItem>
            <IonItem>
              <IonText>
                <b>Github:</b> <a href="https://github.com/ChristopherMercadoB?tab=repositories">ChristopherMercadoB</a>
              </IonText>
            </IonItem>
            <IonItem>
              <IonText>
                <b>Linkedin:</b> <a href="https://www.linkedin.com/in/christopher-mercado-8a8582310/">christopher-mercado</a>
              </IonText>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default HireMe;
