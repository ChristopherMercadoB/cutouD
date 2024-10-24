import { IonButton, IonContent, IonImg, IonInput, IonItem, IonText } from "@ionic/react";
import axios from "axios";
import adulto from "../assets/adulto.jpg";
import anciano from "../assets/anciano.jpg";
import joven from "../assets/joven.jpg";
import './AgeDetector.css'
import { useState } from "react";

const AgeDetector = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const getAge = () => {
    axios
      .get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        console.log(res.data.age)
        if (res.data.age <= 29 && res.data.age > 0) {
          setAge("joven");
        } else if (res.data.age >= 30 && res.data.age <= 59) setAge("adulto");
        else if (res.data.age > 60) setAge("anciano");
        console.log(age);
      })
      .catch((error) => {
        setHasError(true)
        setError(error.message)
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
          <IonButton onClick={getAge}>Obtener</IonButton>
        </IonItem>

        {hasError ? (<IonText>{error}</IonText>) : age !== "" ? (
          <IonContent className="ion-content">
            <IonText>{age}</IonText>
            <IonImg
              src={
                age === "joven"
                  ? joven
                  : age === "adulto"
                  ? adulto
                  : age === "anciano"
                  ? anciano
                  : ''
              }
            ></IonImg>
          </IonContent>
        ) : (
          ""
        )}
      </IonContent>
    </>
  );
};

export default AgeDetector;
