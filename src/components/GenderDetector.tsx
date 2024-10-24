import React, { useState } from "react";
import {
  IonInput,
  IonButton,
  IonCard,
  IonContent,
  IonItem,
} from "@ionic/react";
import axios from "axios";
import "./GenderDetector.css";

const GenderDetector = () => {
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string | undefined>("");

  const getGender = () => {
    axios
      .get(`https://api.genderize.io/?name=${name}`)
      .then((res) => {
        setGender(res.data.gender);
        console.log(gender);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <IonContent>
        <IonItem>
          <IonInput
            value={name}
            onIonChange={(e) => setName(e.detail.value ?? "")}
            placeholder="Ingrese el nombre"
          />
        </IonItem>
        <IonItem>
          <IonButton onClick={getGender}>Obtener</IonButton>
        </IonItem>

        {gender === "male" ? (
          <div className="male"></div>
        ) : gender === "female" ? (
          <div className="female"></div>
        ) : (
          <div className="both"></div>
        )}
      </IonContent>
    </>
  );
};

export default GenderDetector;
