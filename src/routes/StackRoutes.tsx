import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Gallery } from '../screens/Gallery';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="gallery" component={Gallery} />
      <Screen name="profile" component={Profile} />
      <Screen name="settings" component={Settings} />
    </Navigator>
  );
}