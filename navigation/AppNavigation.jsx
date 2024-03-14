import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Login' component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppNavigation
