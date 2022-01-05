import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import InstructionsScreen from './src/screens/InstructionsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CartScreen from './src/screens/CartScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
	  Instructions: InstructionsScreen,
	  List: ListScreen,
	  Image: ImageScreen,
	  Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Cart: CartScreen
  },

  {
    initialRouteName: 'Home',
    defaultNavigationOptions: { title: "Joanna's Going Shopping!!!" }
  }
);

export default createAppContainer(navigator);