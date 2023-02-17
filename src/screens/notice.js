import React from 'react';
import {WebView} from 'react-native-webview';

const Notice = () => {
  return (
    <>
      <WebView
        source={{
          uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601',
        }}
      />
    </>
  );
};

export default Notice;
