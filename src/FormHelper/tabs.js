import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();


export default function App() {


  const [tabs, setTabs] = React.useState([
      {
        name : "tab-1",
        component : TabScreen,
      }
  ])


  const addNewTab = () => {
    setTabs(tabs => [
      ...tabs,
      {
        name : "tab-" + (parseInt(tabs.pop().name.replace("tab-", "")) + 1),
        component : TabScreen,
      }
    ])
  }


  const remove = (route) => {
    setTabs(tabs => tabs.filter(tab => tab.name !== route.name))
  }


  function TabScreen({route}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={addNewTab}>Add New Tab</Text>
        {
          route.name !== "tab-1" && <Text onPress={() => remove(route)}>close me</Text>
        } 
      </View>
    );
  }



  return (
    <NavigationContainer>
      <Tab.Navigator>
        {
          tabs.map(tab => <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />)
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
}