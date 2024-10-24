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
          <IonCardHeader>
            <IonAvatar>
              <img src={foto} alt="" />
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
                <b>Github:</b> Christopher Mercado
              </IonText>
            </IonItem>
            <IonItem>
              <IonText>
                <b>Nombre:</b> Christopher Mercado
              </IonText>
            </IonItem>
            <IonItem>
              <IonText>
                <b>Nombre:</b> Christopher Mercado
              </IonText>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default HireMe;
