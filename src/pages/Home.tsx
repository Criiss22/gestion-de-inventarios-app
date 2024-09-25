import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonLabel, IonMenuButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      {/* Menú lateral */}
      <IonMenu side="start" contentId="main-content" className="custom-menu">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button>
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Ajustes</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Acerca de</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Página principal */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            {/* Botón del menú */}
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            {/* Se agrega una clase personalizada al título */}
            <IonTitle className="custom-title">StockPro+</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" className="custom-title">StockPro+</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
