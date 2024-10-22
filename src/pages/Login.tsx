import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonMenu, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonMenuButton, 
  IonButtons 
} from '@ionic/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // Estado para el correo electrónico
  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar la vista

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegister = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };

  return (
    <>
      {/* Menú lateral */}
      <IonMenu side="start" contentId="main-content">
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
              <IonLabel>Historial de Movimientos</IonLabel>
            </IonItem>
            <IonItem button routerLink="/ayuda">
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Página de login o registro */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {isRegistering ? (
            <>
              {/* Formulario de registro */}
              <IonItem>
                <IonLabel position="floating">Nombre de usuario</IonLabel>
                <IonInput
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonButton expand="full" onClick={handleRegister}>
                Registrarse
              </IonButton>
              <IonButton expand="full" fill="clear" onClick={() => setIsRegistering(false)}>
                Volver a Iniciar Sesión
              </IonButton>
            </>
          ) : (
            <>
              {/* Formulario de inicio de sesión */}
              <IonItem>
                <IonLabel position="floating">Nombre de usuario</IonLabel>
                <IonInput
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  clearInput
                />
              </IonItem>

              <IonButton expand="full" onClick={handleLogin}>
                Iniciar Sesión
              </IonButton>
              <IonButton expand="full" fill="clear" onClick={() => setIsRegistering(true)}>
                Crear una cuenta
              </IonButton>
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Login;
