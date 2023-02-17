import React from 'react';
import {WebView} from 'react-native-webview';

const Food = () => {
  return (
    <>
      <WebView
        source={{
          uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403',
        }}
      />
    </>
  );
};

export default Food;
