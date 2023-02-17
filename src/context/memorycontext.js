// Context를 사용하기위해 createContext를 이용해 provider를 정의해주는 곳

import React, {useState, createContext} from 'react'; // Context도 하나의 react컴포넌트로 변경 가능한 데이터를 사용하기위해 useState사용

const MemoryContext = createContext({}); // createContext를 사용하여 MemoryContext를 생성

const MemoryContextProvider = ({children}) => {
  // Context도 컴포넌트여서 컴포넌트의 형태를 가짐
  const [lang, setLang] = useState('kor'); // lang을 useState를 이용해 값을 'kor'로 변환

  return (
    <MemoryContext.Provider value={{lang, setLang}}>
      {/*// 화면에 표시될 내용에 Context의 Provider를 감싸서 출력 */}
      {children}
    </MemoryContext.Provider>
  );
};

export {MemoryContext, MemoryContextProvider};
