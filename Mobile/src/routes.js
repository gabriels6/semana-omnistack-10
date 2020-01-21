//yarn add react-navigation
//expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
//yarn add react-navigation-stack <- navegação por botão
//yarn add react-navigation-stack @react-native-community/masked-view


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
            
            title: 'DevRadar'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no Github'
            }
        },
    },
            {

            defaultNavigationOptions:{
                headerTintColor: '#fff', //Text do Título
                headerBackTitleVisible: false,
                headerStyle:{
                    backgroundColor: '#7d40e7',

                }
            },
        
         
    })
);

export default Routes;