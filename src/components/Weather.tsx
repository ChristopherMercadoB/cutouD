import React, { useEffect, useState } from "react";
import useFetch, { BaseApi } from "../hooks/useFetch";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonItem,
  IonText,
} from "@ionic/react";
import axios from "axios";

interface WeatherValues {
  cloudBase: number;
  cloudCeiling: number;
  cloudCover: number;
  dewPoint: number;
  freezingRainIntensity: number;
  humidity: number;
  precipitationProbability: number;
  pressureSurfaceLevel: number;
  rainIntensity: number;
  sleetIntensity: number;
  snowIntensity: number;
  temperature: number;
  temperatureApparent: number;
  uvHealthConcern: number;
  uvIndex: number;
  visibility: number;
  weatherCode: number;
  windDirection: number;
  windGust: number;
  windSpeed: number;
}

interface WeatherData {
  time: string;
  values: WeatherValues;
}

interface Location {
  lat: number;
  lon: number;
  name: string;
  type: string;
}

interface WeatherResponse {
  data: WeatherData;
  location: Location;
}

const Weather = () => {
  const [state, setState] = useState<WeatherResponse>();
  const url =
    "https://api.tomorrow.io/v4/weather/realtime?location=santo+domingo&apikey=RoedbexiSSHR5XKaTqCiHGacxEGWPit4";


  const getData = () => {
    axios.get(url)
    .then(res=>{
        setState(res.data)
    }).catch(err=>console.log(err))
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    
      <IonContent className="text-center">
        <IonCard>
          <IonCardHeader>
            <IonItem>
              <h1>Clima</h1>
            </IonItem>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonText>Fecha: {state?.data.time}</IonText>
            </IonItem>
            <IonItem>
              <IonText>Humedad: {state?.data?.values.humidity}%</IonText>
            </IonItem>
            <IonItem>
              <IonText>
                Temperatura: {state?.data?.values.temperature}C
              </IonText>
            </IonItem>
            <IonItem>
              <IonText>Viento: {state?.data?.values.windSpeed}mph</IonText>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Weather;
