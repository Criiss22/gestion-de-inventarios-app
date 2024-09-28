import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonList, IonItem, IonLabel, IonMenuButton, IonButtons, IonSearchbar } from '@ionic/react';

const GestionInventario: React.FC = () => (
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

    {/* Contenido de la página Gestión de Inventario */}
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Gestión de Inventario</IonTitle>
        <IonSearchbar slot="end" placeholder="Buscar..." style={{ width: '300px' }} />
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>Gestión de Inventario</h1>
      <p>Aquí puedes gestionar el inventario de productos.</p>
    </IonContent>
  </IonPage>
);

export default GestionInventario;
