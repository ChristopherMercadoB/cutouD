import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonInput,
  IonItem,
  IonSpinner,
  IonText,
} from "@ionic/react";
import axios from "axios";
import React, { useState } from "react";

interface University {
  alpha_two_code: string;
  domains: string[];
  state_province: any;
  country: string;
  name: string;
  web_pages: string[];
}

interface BaseApi<T> {
  data: T[] | null;
  hasError: boolean;
  isLoading: boolean;
}

const UniversityDetector = () => {
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<BaseApi<University>>({
    data: null,
    hasError: false,
    isLoading: true,
  });

  const normalize = () => {
    setState({
        data: null,
        hasError: false,
        isLoading: true
    })
  }

  const getCountries = () => {
    normalize();

    const value = country.replace(" ", "+");
    axios
      .get(`http://universities.hipolabs.com/search?country=${value}`)
      .then((response) => {
        setState({
            data: response.data,
            hasError: false,
            isLoading: false
        })
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <IonContent>
        <IonItem>
          <IonInput
            onIonChange={(e) => {
              setCountry(e.detail.value ?? "");
            }}
            placeholder="Ingrese el nombre del pais (En ingles)"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonButton onClick={getCountries}>Buscar universidades</IonButton>
        </IonItem>


        {state.isLoading ?<IonSpinner></IonSpinner> : state.data && (
          <IonContent>
            <IonText>{country}</IonText>
            {state.data?.map((element, key) => (
              <IonCard>
                <IonCardHeader>
                  <h2>{element.name}</h2>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonText>{element.domains[0]}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonText>{element.web_pages[0]}</IonText>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            ))}
          </IonContent>
        )}
      </IonContent>
    </>
  );
};

export default UniversityDetector;
