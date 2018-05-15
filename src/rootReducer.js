/**
 * 根reducer
 * Created by tianrenjie on 2017/11/9
 */
import { combineReducers } from 'redux';
import { user } from './user/login/redux/reducer';

export const rootReducer = combineReducers({
  user,
});
