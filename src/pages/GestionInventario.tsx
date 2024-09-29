import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonSearchbar,
} from '@ionic/react';

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

      {/* Ejemplo de tarjetas */}
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonThumbnail slot="start">
                <img alt="39" src="C:\Users\crist\Desktop\repositorio\ionic\gestion-inventarios\gestion-de-inventarios-app-master\src\imagenes\39.jpg" />
              </IonThumbnail>
              <IonLabel>Item 1</IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item 2</IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item 3</IonLabel>
            </IonItem>

            <IonItem lines="none">
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item 4</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default GestionInventario;
