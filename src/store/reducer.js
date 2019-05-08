import { combineReducers } from 'redux';
import commonReducer from '../common/store/reducer';
import bookReducer from '@/pages/book/store/reducer';

export default combineReducers({
  //引入common中的数据
  common:commonReducer,
  book:bookReducer
})
