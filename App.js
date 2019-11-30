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
});

const App = createAppContainer(MainNavigator);

export default App;
