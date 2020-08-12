import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../../../screens/HomeScreen';

// Stack Navigation
const Stack = createStackNavigator();

export default MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        title: '',
                        header: () => false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}