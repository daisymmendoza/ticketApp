import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedScreen from '../screens/GetStartedScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Get Started"
            component={GetStartedScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0
                },
                title: ''
            }}
        />
        <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0
                },
                title: ''
            }}
        />
    </Stack.Navigator>
)

export default AuthNavigator;