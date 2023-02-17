import langReducer from './langReducer';
import {combineReducers} from 'redux';

const indexReducer = combineReducers({
  langReducer,
});

export default indexReducer;

//store으로 각 사용될 Reducer들을 모아 상태값들을 저장하는 창고
