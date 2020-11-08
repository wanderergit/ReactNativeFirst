import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import Menu from './MenuComponent'
import Dishdetail from './DishdetailComponent';
import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'


//pay attention to this createStackNavigator function usage
const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
}, {
    initialRoutename: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})


class Main extends Component {

    render() {
        const AppContainer = createAppContainer(MenuNavigator);
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <AppContainer />
            </View>
        )
    }
}



export default Main; 