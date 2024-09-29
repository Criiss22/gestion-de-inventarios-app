import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonMenu, IonList, IonItem, IonLabel, IonMenuButton, IonButtons, IonIcon, IonButton } from '@ionic/react';
import { logoIonic } from 'ionicons/icons'; // Importa IonIcon

// Componente Example para los íconos
const IconExample: React.FC = () => {
  return (
    <>
      <IonIcon icon={logoIonic}></IonIcon>
      <IonIcon icon={logoIonic} size="large"></IonIcon>
      <IonIcon icon={logoIonic} color="primary"></IonIcon>
      <IonIcon icon={logoIonic} size="large" color="primary"></IonIcon>
    </>
  );
};

// Componente Example para el botón
const ButtonExample: React.FC = () => {
  return <IonButton>hola mundo</IonButton>;
};

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
      <p>Si necesitas más información, por favor contacta a nuestro soporte.</p>
      
      {/* Aquí se añaden los íconos y el botón */}
      <IconExample />
      <ButtonExample />
    </IonContent>
  </IonPage>
);

export default Ayuda;
