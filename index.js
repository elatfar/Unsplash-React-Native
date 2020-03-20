/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import Detail from './src/Detail';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Nav=createStackNavigator(
    {
        home:App,
        detail:Detail,
    },
    {
        defaultNavigationOptions:({navigation}) => {
            return{
                headerStyle: {backgroundColor:'#FFD248'},
                headerTintColor: '#fff',
                title:'Unplash App',
            }
        }
    }
)

AppRegistry.registerComponent(appName, () => createAppContainer(Nav));
