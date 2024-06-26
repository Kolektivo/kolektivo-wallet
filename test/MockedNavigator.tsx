import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()
const MockedNavigator = ({
  component,
  params = {},
}: {
  component: React.ComponentType<any>
  params?: object
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'MockedScreen'}>
        <Stack.Screen name="MockedScreen" component={component} initialParams={params} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MockedNavigator
