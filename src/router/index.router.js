import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen/HomeScreen.component';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  initialRouteName: 'Home',
});

export default AppNavigator;
