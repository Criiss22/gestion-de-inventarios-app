import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonMenu, IonList, IonItem, IonLabel, IonMenuButton, IonButtons } from '@ionic/react';

const Ayuda: React.FC = () => (
  <IonPage>
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

    {/* Contenido de la página Ayuda */}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Ayuda</IonTitle>
        <IonSearchbar slot="end" placeholder="Buscar..." style={{ width: '300px' }} />
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>Ayuda</h1>
      <p>Esta es la sección de ayuda. Aquí encontrarás respuestas a tus preguntas.</p>
    </IonContent>
  </IonPage>
);

export default Ayuda;
