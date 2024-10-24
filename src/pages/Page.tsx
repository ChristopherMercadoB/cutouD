import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import GenderDetector from '../components/GenderDetector';
import AgeDetector from '../components/AgeDetector';
import UniversityDetector from '../components/UniversityDetector';
import Weather from '../components/Weather';
import Harvard from '../components/Harvard';
import HireMe from '../components/HireMe';
import Home from '../components/Home';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {name === 'Home' ? <Home/> : name === 'Predecir Genero' ? <GenderDetector/> : name === 'Predecir Edad' ? <AgeDetector/> : name === 'Universidades' ? <UniversityDetector/> : name === 'Clima' ? <Weather/> : name==='Noticias' ? <Harvard/> : name === 'Contratame' ? <HireMe/> : ''}
      </IonContent>
    </IonPage>
  );
};

export default Page;
