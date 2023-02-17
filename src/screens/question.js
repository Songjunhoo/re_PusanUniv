import React, {useContext} from 'react';
import {Text, View, StyleSheet, Linking, TouchableOpacity} from 'react-native';

import {MemoryContext} from '../context/memorycontext';
import customData from '../../config.json';

const Question = () => {
  const memoryContext = useContext(MemoryContext);
  const language = memoryContext.lang;

  const htitle =
    language == 'kor'
      ? customData.kor.sub_page5_t1
      : customData.eng.sub_page5_t1;
  const hcontent1 =
    language == 'kor'
      ? customData.kor.sub_page5_t1_t1
      : customData.eng.sub_page5_t1_t1;
  const hcontent2 =
    language == 'kor'
      ? customData.kor.sub_page5_t1_t2
      : customData.eng.sub_page5_t1_t2;
  const btitle =
    language == 'kor'
      ? customData.kor.sub_page4_t1
      : customData.eng.sub_page4_t1;
  const bt1name =
    language == 'kor'
      ? customData.kor.sub_page4_b1
      : customData.eng.sub_page4_b1;
  const bt1content =
    language == 'kor'
      ? customData.kor.sub_page4_b1_t
      : customData.eng.sub_page4_b1_t;
  const bt2name =
    language == 'kor'
      ? customData.kor.sub_page4_b2
      : customData.eng.sub_page4_b2;
  const bt2content =
    language == 'kor'
      ? customData.kor.sub_page4_b2_t
      : customData.eng.sub_page4_b2_t;
  const bt3name =
    language == 'kor'
      ? customData.kor.sub_page4_b3
      : customData.eng.sub_page4_b3;
  const bt3content =
    language == 'kor'
      ? customData.kor.sub_page4_b3_t
      : customData.eng.sub_page4_b3_t;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>{htitle}</Text>
          <Text style={styles.content}>{hcontent1}</Text>
          <Text style={styles.content}>{hcontent2}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{btitle}</Text>
          <TouchableOpacity
            style={styles.contentBt}
            onPress={() =>
              Linking.openURL(
                'https://dorm.pusan.ac.kr/dorm/bbs/list04/20000603',
              )
            }>
            <Text style={styles.contentBtText}>{bt1name}</Text>
          </TouchableOpacity>
          <Text style={styles.content}>{bt1content}</Text>
          <TouchableOpacity
            style={styles.contentBt}
            onPress={() =>
              Linking.openURL(
                'https://dorm.pusan.ac.kr/dorm/bbs/list04/20000604',
              )
            }>
            <Text style={styles.contentBtText}>{bt2name}</Text>
          </TouchableOpacity>
          <Text style={styles.content}>{bt2content}</Text>
          <TouchableOpacity
            style={styles.contentBt}
            onPress={() => Linking.openURL('tel: 051-510-7827')}>
            <Text style={styles.contentBtText}>{bt3name}</Text>
          </TouchableOpacity>
          <Text style={styles.content}>{bt3content}</Text>
        </View>
      </View>
    </>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  body: {
    padding: 20,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    color: 'gray',
    padding: 7,
  },
  contentBt: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B89DC',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    padding: 5,
  },
  contentBtText: {
    color: '#ffffff',
    fontSize: 20,
  },
});
