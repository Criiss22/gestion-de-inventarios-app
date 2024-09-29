import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import GestionInventario from './pages/GestionInventario';
import Inventario from './pages/Inventario';
import HistorialMovimientos from './pages/HistorialMovimientos';
import Ayuda from './pages/Ayuda';

/* CSS principal requerido para que los componentes de Ionic funcionen correctamente */
import '@ionic/react/css/core.css';

/* CSS básico para aplicaciones construidas con Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Utilidades CSS opcionales que pueden comentarse si no son necesarias */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Modo oscuro y variables de tema */
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/gestion-inventario">
          <GestionInventario />
        </Route>
        <Route exact path="/inventario">
          <Inventario />
        </Route>
        <Route exact path="/historial-movimientos">
          <HistorialMovimientos />
        </Route>
        <Route exact path="/ayuda">
          <Ayuda />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
