import React from 'react';
import {WebView} from 'react-native-webview';

const Rule = () => {
  return (
    <>
      <WebView
        source={{
          uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401',
        }}
      />
    </>
  );
};

export default Rule;
