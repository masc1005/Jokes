import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'

const Stack = createStackNavigator()


export default function Routes(){
    return(

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name="home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>

        
    )
}