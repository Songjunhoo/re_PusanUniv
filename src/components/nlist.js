import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

const Nlist = props => {
  const list = props.list; //list는 alarm의 list 값
  const listOn = props.listOn; // listOn은 alarm의 listOn 값

  const [hide, setHide] = useState(listOn); // hide는 listOn 값
  const [hidechar, setHidechar] = useState('▼'); // hidechar는 ▼값

  const hidefunc = () => {
    // hidefunc는 상위 listonfunc값을 false로, hide값을 반대로(value=>!value), hide가 false면 ▲로 아니면 ▼로 바꿔주는 함수
    props.listOnfunc(false);

    setHide(value => !value);

    if (hide == false) {
      setHidechar('▲');
    } else {
      setHidechar('▼');
    }
  };

  return (
    <View style={styles.listContainer}>
      <TouchableWithoutFeedback onPress={hidefunc}>
        <View style={styles.listTitleArea}>
          <Text style={styles.listTitle}>{list.title}</Text>
          <Text style={styles.listChar}>{hidechar}</Text>
        </View>
      </TouchableWithoutFeedback>
      {hide && (
        <TouchableWithoutFeedback>
          <View style={styles.listContentArea}>
            <Text style={styles.listDate}>{list.date}</Text>
            <Text style={styles.listContent}>{list.contents}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Nlist;

const styles = StyleSheet.create({
  listContainer: {
    borderBottomWidth: 1,
    borderColor: '#d6d2d2',
    padding: 15,
  },
  listTitleArea: {
    flexDirection: 'row',
  },
  listTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    margin: 5,
  },
  listChar: {
    marginLeft: 'auto',
  },
  listContentArea: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    height: 400,
    padding: 15,
  },
  listContent: {
    color: '#000000',
    marginTop: 10,
  },
  listDate: {
    color: '#000000',
    marginLeft: 'auto',
  },
});
