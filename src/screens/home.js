import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {MemoryContext} from '../context/memorycontext';
import customData from '../../config.json';

export default function Home({navigation}) {
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

  let onBt = {
    width: 70,
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    borderStyle: 'solid',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  };
  let offBt = {
    width: 70,
    height: 30,
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
    borderStyle: 'solid',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  };
  let onText = {
    color: 'black',
  };
  let offText = {
    color: 'white',
  };

  let korBt, engBt, korText, engText;

  if (language == 'kor') {
    korBt = onBt;
    engBt = offBt;
    korText = onText;
    engText = offText;
  } else if (language == 'eng') {
    engBt = onBt;
    korBt = offBt;
    engText = onText;
    korText = offText;
  }

  let {width, height} = Dimensions.get('window');

  return (
    <>
      <SafeAreaView>
        <View style={(styles.container, {width, height})}>
          <ImageBackground
            style={styles.bgimage}
            source={require('../images/bg.jpg')}
            resizeMode="stretch">
            <View>
              <StatusBar
                backgroundColor={'transparent'}
                barStyle="dark-content"
                translucent={true}
              />
            </View>
            <View style={styles.header}>
              <TouchableOpacity
                style={korBt}
                onPress={() => {
                  memoryContext.setLang('kor');
                }}>
                <Text style={korText}>한국어</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={engBt}
                onPress={() => {
                  memoryContext.setLang('eng');
                }}>
                <Text style={engText}>ENG</Text>
              </TouchableOpacity>
            </View>
            {/* -----------------------------------------------------------다국어 버튼  */}
            <View style={styles.mainlogoArea}>
              <Image
                source={require('../images/logo.png')}
                style={styles.mainlogo}
              />
            </View>
            {/* -------------------------------------------------------------- 메인 로고  */}
            <View style={styles.body}>
              <View style={styles.btarea}>
                <TouchableOpacity
                  style={styles.mainbt}
                  onPress={() => {
                    navigation.navigate('Alarm');
                  }}>
                  <Image
                    style={styles.bticon}
                    source={require('../images/i1.png')}
                  />
                  <View>
                    <Text style={styles.bttext}>{alarm}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.mainbt}
                  onPress={() => {
                    navigation.navigate('Food');
                  }}>
                  <Image
                    style={styles.bticon}
                    source={require('../images/i2.png')}
                  />
                  <Text style={styles.bttext}>{food}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btarea}>
                <TouchableOpacity
                  style={styles.mainbt}
                  onPress={() => {
                    navigation.navigate('Notice');
                  }}>
                  <Image
                    style={styles.bticon}
                    source={require('../images/i3.png')}
                  />
                  <Text style={styles.bttext}>{notice}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.mainbt}
                  onPress={() => {
                    navigation.navigate('Rule');
                  }}>
                  <Image
                    style={styles.bticon}
                    source={require('../images/i4.png')}
                  />
                  <Text style={styles.bttext}>{rule}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.mainbt}
                  onPress={() => {
                    navigation.navigate('Question');
                  }}>
                  <Image
                    style={styles.bticon}
                    source={require('../images/i5.png')}
                  />
                  <Text style={styles.bttext}>{question}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  bgimage: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: '10%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  mainlogoArea: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainlogo: {
    resizeMode: 'contain',
    height: 100,
    width: 300,
  },
  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '30%',
  },
  btarea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainbt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    height: 200,
    borderRadius: 15,
    margin: 8,
  },
  bttext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  bticon: {
    resizeMode: 'contain',
    width: 60,
    height: 70,
  },
});
