import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen/HomeScreen.component';
import FullImage from '../components/FullImage/FullImage.component';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  FullImage: {
    screen: FullImage,
  },
}, {
  initialRouteName: 'Home',
});

export default AppNavigator;
