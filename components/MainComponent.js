import React, { Component } from 'react'
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native'
import Menu from './MenuComponent'
import Dishdetail from './DishdetailComponent';
import Aboutus from './AboutusComponent';
import Contactus from './ContactusComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, SafeAreaView } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Home from './HomeComponent'
import { Icon } from 'react-native-elements';


//pay attention to this createStackNavigator function usage
//always put all screens in createStackNavigator cause it gives u menu bar
const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: () => <Icon name='menu' size={24}
                color='black' onPress={() => navigation.toggleDrawer()}
            />
        })
    },
    Dishdetail: { screen: Dishdetail }
}, {
    initialRoutename: 'Menu',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='black' onPress={() => navigation.toggleDrawer()}
        />
    })
})

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='black' onPress={() => navigation.toggleDrawer()}
        />
    })
})

const AboutusNavigator = createStackNavigator({
    Aboutus: { screen: Aboutus },
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='black' onPress={() => navigation.toggleDrawer()}
        />
    })
})

const ContactusNavigator = createStackNavigator({
    Contactus: { screen: Contactus },
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='black' onPress={() => navigation.toggleDrawer()}
        />
    })
})

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>
                        Ristorante Con Fusion
                    </Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);



const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintcolor }) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintcolor}
                />
            )
        }
    },
    Aboutus: {
        screen: AboutusNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintcolor }) => (
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintcolor}
                />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintcolor }) => (
                <Icon
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={tintcolor}
                />
            )
        }
    },
    Contactus: {
        screen: ContactusNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintcolor }) => (
                <Icon
                    name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintcolor}
                />
            )
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
})

class Main extends Component {

    render() {
        const AppContainer = createAppContainer(MainNavigator);
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <AppContainer />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
})

export default Main; 