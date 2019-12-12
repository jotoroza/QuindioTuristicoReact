import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/layout/homescreen';

import HotelScreen from './components/hoteles/inicial';
import HotelVisualizar from './components/hoteles/visualizar';
import VerHotel from './components/hoteles/ver';
import HotelAdicionar from './components/hoteles/adicionar';
import HotelModificar from './components/hoteles/modificar';
import HotelEditar from './components/hoteles/editar';
import HotelEliminar from './components/hoteles/eliminar';
import HotelBorrar from './components/hoteles/borrar';

import SitiosTuristicosScreen from './components/sitios_turisticos/inicial';
import SitiosTuristicosVisualizar from './components/sitios_turisticos/visualizar';
import VerSitiosTuristicos from './components/sitios_turisticos/ver';
import SitiosTuristicosAdicionar from './components/sitios_turisticos/adicionar';
import SitiosTuristicosModificar from './components/sitios_turisticos/modificar';
import SitiosTuristicosEditar from './components/sitios_turisticos/editar';
import SitiosTuristicosEliminar from './components/sitios_turisticos/eliminar';
import SitiosTuristicosBorrar from './components/sitios_turisticos/borrar';

import OperadoresTuristicosScreen from './components/operadores_turisticos/inicial';
import OperadoresTuristicosVisualizar from './components/operadores_turisticos/visualizar';
import VerOperadoresTuristicos from './components/operadores_turisticos/ver';
import OperadoresTuristicosAdicionar from './components/operadores_turisticos/adicionar';
import OperadoresTuristicosModificar from './components/operadores_turisticos/modificar';
import OperadoresTuristicosEditar from './components/operadores_turisticos/editar';
import OperadoresTuristicosEliminar from './components/operadores_turisticos/eliminar';
import OperadoresTuristicosBorrar from './components/operadores_turisticos/borrar';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },

    HotelScreen: { screen: HotelScreen },
    HotelVisualizar: { screen: HotelVisualizar },
    VerHotel: { screen: VerHotel },
    HotelAdicionar: { screen: HotelAdicionar },
    HotelModificar: { screen: HotelModificar },
    HotelEditar: { screen: HotelEditar },
    HotelEliminar: { screen: HotelEliminar },
    HotelBorrar: { screen: HotelBorrar },

    SitiosTuristicosScreen: { screen: SitiosTuristicosScreen },
    SitiosTuristicosVisualizar: { screen: SitiosTuristicosVisualizar },
    VerSitiosTuristicos: { screen: VerSitiosTuristicos },
    SitiosTuristicosAdicionar: { screen: SitiosTuristicosAdicionar },
    SitiosTuristicosModificar: { screen: SitiosTuristicosModificar },
    SitiosTuristicosEditar: { screen: SitiosTuristicosEditar },
    SitiosTuristicosEliminar: { screen: SitiosTuristicosEliminar },
    SitiosTuristicosBorrar: { screen: SitiosTuristicosBorrar },

    OperadoresTuristicosScreen: { screen: OperadoresTuristicosScreen },
    OperadoresTuristicosVisualizar: { screen: OperadoresTuristicosVisualizar },
    VerOperadoresTuristicos: { screen: VerOperadoresTuristicos },
    OperadoresTuristicosAdicionar: { screen: OperadoresTuristicosAdicionar },
    OperadoresTuristicosModificar: { screen: OperadoresTuristicosModificar },
    OperadoresTuristicosEditar: { screen: OperadoresTuristicosEditar },
    OperadoresTuristicosEliminar: { screen: OperadoresTuristicosEliminar },
    OperadoresTuristicosBorrar: { screen: OperadoresTuristicosBorrar },
});

const App = createAppContainer(MainNavigator);

export default App;
