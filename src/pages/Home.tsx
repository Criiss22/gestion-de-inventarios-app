import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonLabel, 
  IonMenuButton, IonButtons, IonSearchbar, IonButton, IonIcon 
} from '@ionic/react';
import { personCircle } from 'ionicons/icons'; // Importar el ícono de persona
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';
import imagen39 from '../imagenes/39.jpg';

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
            <IonItem button routerLink="/home">
              <IonLabel>Inicio</IonLabel>
            </IonItem>
            <IonItem button routerLink="/gestion-inventario">
              <IonLabel>Gestión de inventario</IonLabel>
            </IonItem>
            <IonItem button routerLink="/inventario">
              <IonLabel>Inventario</IonLabel>
            </IonItem>
            <IonItem button routerLink="/historial-movimientos">
              <IonLabel>Historial De Movimientos</IonLabel>
            </IonItem>
            <IonItem button routerLink="/ayuda">
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
            <IonItem button routerLink="/login">  
              <IonLabel>Login</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Página principal */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>

            <IonTitle className="custom-title">StockPro+</IonTitle>

            {/* Contenedor para buscador e ícono */}
            <IonButtons slot="end" style={{ display: 'flex', alignItems: 'center' }}>
              {/* Buscador */}
              <IonSearchbar 
                placeholder="Buscar..." 
                style={{ width: '30px', marginRight: '10px' }} 
              />
              
              {/* Botón de inicio de sesión con ícono de persona */}
              <IonButton routerLink="/login" fill="outline">
                <IonIcon icon={personCircle} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" className="custom-title">StockPro+</IonTitle>
            </IonToolbar>
          </IonHeader>

          <ExploreContainer />

          {/* Imagen */}
          <img src={imagen39} alt="Descripción de la imagen" style={{ width: '100%', height: 'auto' }} />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
