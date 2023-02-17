import React, {useEffect, useContext} from 'react';
import {Alert, AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';

import customData from './config.json';

import Home from './src/screens/home';
import Alarm from './src/screens/alarm';
import Food from './src/screens/food';
import Notice from './src/screens/notice';
import Rule from './src/screens/rule';
import Question from './src/screens/question';
import {
  MemoryContext,
  MemoryContextProvider,
} from './src/context/memorycontext';

const Stack = createNativeStackNavigator();

const App = () => {
  const memoryContext = useContext(MemoryContext);
  const language = memoryContext.lang;

  const alarm =
    language == 'kor' ? customData.kor.main_title1 : customData.eng.main_title1;
  const food =
    language == 'kor' ? customData.kor.main_title2 : customData.eng.main_title2;
  const notice =
    language == 'kor' ? customData.kor.main_title3 : customData.eng.main_title3;
  const rule =
    language == 'kor' ? customData.kor.main_title4 : customData.eng.main_title4;
  const question =
    language == 'kor' ? customData.kor.main_title5 : customData.eng.main_title5;

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('Message handled in the frontground!', remoteMessage);
    });

    return unsubscribe;
  }, []);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  AppRegistry.registerComponent('app', () => App);

  return (
    <>
      <MemoryContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Alarm"
              component={Alarm}
              options={{title: alarm, headerTitleAlign: 'center'}}
            />
            <Stack.Screen
              name="Food"
              component={Food}
              options={{title: food, headerTitleAlign: 'center'}}
            />
            <Stack.Screen
              name="Notice"
              component={Notice}
              options={{title: notice, headerTitleAlign: 'center'}}
            />
            <Stack.Screen
              name="Rule"
              component={Rule}
              options={{title: rule, headerTitleAlign: 'center'}}
            />
            <Stack.Screen
              name="Question"
              component={Question}
              options={{title: question, headerTitleAlign: 'center'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MemoryContextProvider>
    </>
  );
};

export default App;
