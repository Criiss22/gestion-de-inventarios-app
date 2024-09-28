import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonList, IonItem, IonLabel, IonMenuButton, IonButtons, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

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
            <IonSearchbar slot="end" placeholder="Buscar..." style={{ width: '300px' }} />
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
