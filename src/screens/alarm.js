import React, {useState, useContext} from 'react';
import {Text, View, Switch, ScrollView, StyleSheet} from 'react-native';

import Nlist from './../components/nlist';
import listData from '../notification.json';
import {MemoryContext} from '../context/memorycontext';
import customData from '../../config.json';

const Alarm = () => {
  const memoryContext = useContext(MemoryContext);
  const language = memoryContext.lang;

  const setTitle =
    language == 'kor'
      ? customData.kor.sub_page1_t1
      : customData.eng.sub_page1_t1;
  const listTitle =
    language == 'kor'
      ? customData.kor.sub_page1_t2
      : customData.eng.sub_page1_t2;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // ----------------------------------------------------------------------------------------------- 다국어 기능

  const [listOn, setlistOn] = useState(false);

  const listOnfunc = toggle => {
    setlistOn(toggle);
  };

  // noticeList는 Nlist의 속성을
  // list는 noticeList의 매핑된 list 값
  // listOn은 useState로 인한 false 값
  // listOnfunc은 setListOn을 이용하여 기본 false값인 listOn을 toggle(참, 거짓)로 변환하는 값
  // 으로 변경하여 출력

  const noticeList = listData.list.map(list => {
    return (
      <Nlist
        key={list.idx.toString()}
        list={list}
        listOn={listOn}
        listOnfunc={listOnfunc}
      />
    );
  });
  // --------------------------------------------------------------------------------------------------- 알림 리스트 기능
  return (
    <>
      <View style={styles.container}>
        <View style={styles.pushset}>
          <Text style={styles.pushtitle}>{setTitle}</Text>
          <View style={styles.pushbt}>
            <Switch
              trackColor={{false: '#767577', true: '#32cc21'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.pushset}>
          <Text style={styles.pushtitle}>{listTitle}</Text>
        </View>
        <ScrollView>{noticeList}</ScrollView>
      </View>
    </>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pushset: {
    flexDirection: 'row',
    padding: 10,
  },
  pushtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  pushbt: {
    marginLeft: 'auto',
  },
});
