import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/folder/Home',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Predecir Genero',
    url: '/folder/Predecir Genero',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Predecir Edad',
    url: '/folder/Predecir Edad',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Universidades',
    url: '/folder/Universidades',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Clima',
    url: '/folder/Clima',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Noticias',
    url: '/folder/Noticias',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Contratame',
    url: '/folder/Contratame',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
 
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Christopher Mercado</IonListHeader>
          <IonNote>2022-1936</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
        
          
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
