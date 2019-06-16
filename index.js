/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/components/App/App';
import { name as appName } from './src/components/App/app.json';

// uncomment next line for debugging network calls
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
