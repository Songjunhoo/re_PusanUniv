export const korLanguage = 'kor'; // 액션의 종류를 식별하는 문자열 korLanguage을 kor로 정의
export const engLanguage = 'eng'; // 액션의 종류를 식별하는 문자열 engLanguage eng로 정의

export const korLangAction = res => {
  return {
    type: korLanguage, // 액션의 종류를 식별하는 문자열
    payload: res, //액션에 필요한 임의의 데이터 => 없어도 동작함
  };
};
export const engLangAction = res => {
  return {
    type: engLanguage,
    payload: res,
  };
};
