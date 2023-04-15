import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Datadetails from '../Screens/Datadetails';

const Stack = createNativeStackNavigator();
const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Datadetails" component={Datadetails}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default NavigationScreen;